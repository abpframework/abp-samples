using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using SyncfusionSample.Data;
using Volo.Abp.Application.Services;

namespace SyncfusionSample.Books
{
    public class BookAppService : ApplicationService, IBookAppService
    {
        private readonly SampleDataService _sampleBookDataService;

        public BookAppService( SampleDataService sampleBookDataService )
        {
            _sampleBookDataService = sampleBookDataService;
        }

        public async Task<List<BookDto>> GetListAsync()
        {
            return await Task.Run( () => _sampleBookDataService.GetBooks() );
        }

        public async Task<BookDto> GetAsync( Guid id )
        {
            var book = await Task.Run( () => _sampleBookDataService.GetBook( id ) );

            return book;
        }

        public async Task<BookDto> CreateAsync( CreateUpdateBookDto input )
        {
            var newBook = new BookDto
            {
                Id = GuidGenerator.Create(),
                Name = input.Name,
                PublishDate = input.PublishDate,
                Price = input.Price
            };

            newBook = await Task.Run( () => _sampleBookDataService.CreateBook( newBook ) );

            return newBook;
        }

        public async Task<BookDto> UpdateAsync( Guid id, CreateUpdateBookDto input )
        {
            var book = await Task.Run( () => _sampleBookDataService.GetBook( id ) );

            book.Name = input.Name;
            book.Price = input.Price;
            book.PublishDate = input.PublishDate;

            book = await Task.Run( () => _sampleBookDataService.UpdateBook( book ) );

            return book;
        }

        public async Task DeleteAsync( Guid id )
        {
            var book = await Task.Run( () => _sampleBookDataService.GetBook( id ) );

            await Task.Run( () => _sampleBookDataService.DeleteBook( book ) );
        }
    }
}
