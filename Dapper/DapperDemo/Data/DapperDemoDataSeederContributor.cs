using DapperDemo.Entities;
using Volo.Abp.Data;
using Volo.Abp.DependencyInjection;
using Volo.Abp.Domain.Repositories;

namespace DapperDemo.Data;

public class DapperDemoDataSeederContributor : IDataSeedContributor, ITransientDependency
{
    private readonly IRepository<Book, Guid> _bookRepository;

    public DapperDemoDataSeederContributor(IRepository<Book, Guid> bookRepository)
    {
        _bookRepository = bookRepository;
    }

    public async Task SeedAsync(DataSeedContext context)
    {
        if (await _bookRepository.GetCountAsync() > 0)
        {
            return;
        }

        await _bookRepository.InsertAsync(
            new Book
            {
                Name = "1984",
                PublishDate = new DateTime(1949, 6, 8),
                Price = 19.84f
            }
        );

        await _bookRepository.InsertAsync(
            new Book
            {
                Name = "The Hitchhiker's Guide to the Galaxy",
                PublishDate = new DateTime(1995, 9, 27),
                Price = 42.0f
            }
        );
    }
}