using AbpAiChat.Data;
using AbpAiChat.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.AI;
using Microsoft.Extensions.VectorData;
using Volo.Abp.EntityFrameworkCore;
using Volo.Abp.Uow;

namespace AbpAiChat.Services.Ingestion;

public class DataIngestor(
    ILogger<DataIngestor> logger,
    IEmbeddingGenerator<string, Embedding<float>> embeddingGenerator,
    IVectorStore vectorStore,
    IUnitOfWorkManager unitOfWorkManager,
    IDbContextProvider<AbpAiChatDbContext> dbContextProvider)
{
    public static async Task IngestDataAsync(IServiceProvider services, IIngestionSource source)
    {
        using var scope = services.CreateScope();
        var ingestor = scope.ServiceProvider.GetRequiredService<DataIngestor>();
        await ingestor.IngestDataAsync(source);
    }

    public async Task IngestDataAsync(IIngestionSource source)
    {
        using (var uow = unitOfWorkManager.Begin())
        {
            var vectorCollection = vectorStore.GetCollection<string, SemanticSearchRecord>("data-aichat-ingested");
            await vectorCollection.CreateCollectionIfNotExistsAsync();

            var dbContext = await dbContextProvider.GetDbContextAsync();

            var documentsForSource = dbContext.Documents
                .Where(d => d.SourceId == source.SourceId)
                .Include(d => d.Records);

            var deletedFiles = await source.GetDeletedDocumentsAsync(documentsForSource);
            foreach (var deletedFile in deletedFiles)
            {
                logger.LogInformation("Removing ingested data for {file}", deletedFile.Id);
                await vectorCollection.DeleteBatchAsync(deletedFile.Records.Select(r => r.Id));
                dbContext.Documents.Remove(deletedFile);
            }
            await dbContext.SaveChangesAsync();

            var modifiedDocs = await source.GetNewOrModifiedDocumentsAsync(documentsForSource);
            foreach (var modifiedDoc in modifiedDocs)
            {
                logger.LogInformation("Processing {file}", modifiedDoc.Id);

                if (modifiedDoc.Records.Count > 0)
                {
                    await vectorCollection.DeleteBatchAsync(modifiedDoc.Records.Select(r => r.Id));
                }

                var newRecords = await source.CreateRecordsForDocumentAsync(embeddingGenerator, modifiedDoc.Id);
                await foreach (var id in vectorCollection.UpsertBatchAsync(newRecords)) { }

                modifiedDoc.Records.Clear();
                modifiedDoc.Records.AddRange(newRecords.Select(r => new IngestedRecord { Id = r.Key, DocumentId = modifiedDoc.Id }));

                if (dbContext.Entry(modifiedDoc).State == EntityState.Detached)
                {
                    dbContext.Documents.Add(modifiedDoc);
                }
            }

            await dbContext.SaveChangesAsync();
            logger.LogInformation("Ingestion is up-to-date");

            await uow.CompleteAsync();
        }
    }
}
