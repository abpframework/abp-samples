using System;
using System.Threading.Tasks;
using Volo.Abp.Data;
using Volo.Abp.DependencyInjection;
using Volo.Abp.Domain.Repositories;
using Volo.Abp.Guids;

namespace Acme.BookStore
{
    public class BookStoreTestDataSeedContributor
        : IDataSeedContributor, ITransientDependency
    {
        private readonly IRepository<Book, Guid> _bookRepository;
        private readonly IGuidGenerator _guidGenerator;

        public BookStoreTestDataSeedContributor(
            IRepository<Book, Guid> bookRepository,
            IGuidGenerator guidGenerator)
        {
            _bookRepository = bookRepository;
            _guidGenerator = guidGenerator;
        }

        public async Task SeedAsync(DataSeedContext context)
        {
            await _bookRepository.InsertAsync(
                new Book(id: _guidGenerator.Create(),
                    name: "Test book 1",
                    type: BookType.Fantastic,
                    publishDate: new DateTime(2015, 05, 24),
                    price: 21
                )
            );

            await _bookRepository.InsertAsync(
                new Book(id: _guidGenerator.Create(),
                    name: "Test book 2",
                    type: BookType.Science,
                    publishDate: new DateTime(2014, 02, 11),
                    price: 15
                )
            );
        }
    }
}