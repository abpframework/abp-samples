using AbpAiChat.Data;
using AbpAiChat.Entities;
using Microsoft.Extensions.AI;

namespace AbpAiChat.Services.Ingestion;

public interface IIngestionSource
{
    string SourceId { get; }

    Task<IEnumerable<IngestedDocument>> GetNewOrModifiedDocumentsAsync(IQueryable<IngestedDocument> existingDocuments);

    Task<IEnumerable<IngestedDocument>> GetDeletedDocumentsAsync(IQueryable<IngestedDocument> existingDocuments);

    Task<IEnumerable<SemanticSearchRecord>> CreateRecordsForDocumentAsync(IEmbeddingGenerator<string, Embedding<float>> embeddingGenerator, string documentId);
}
