using System;
using System.Collections.Generic;
using System.Linq.Dynamic.Core;
using System.Linq;
using System.Threading.Tasks;
using Acme.BookStore.Authors;
using Acme.BookStore.Permissions;
using Microsoft.AspNetCore.Authorization;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;
using Volo.Abp.Domain.Repositories;

namespace Acme.BookStore.Books
{
    [Authorize(BookStorePermissions.Books.Default)]
    public class BookAppService :
        CrudAppService<
            Book, //The Book entity
            BookDto, //Used to show books
            Guid, //Primary key of the book entity
            PagedAndSortedResultRequestDto, //Used for paging/sorting
            CreateUpdateBookDto>, //Used to create/update a book
        IBookAppService //implement the IBookAppService
    {
        private readonly IAuthorRepository _authorRepository;

        public BookAppService(
            IRepository<Book, Guid> repository,
            IAuthorRepository authorRepository)
            : base(repository)
        {
            _authorRepository = authorRepository;
            GetPolicyName = BookStorePermissions.Books.Default;
            GetListPolicyName = BookStorePermissions.Books.Default;
            CreatePolicyName = BookStorePermissions.Books.Create;
            UpdatePolicyName = BookStorePermissions.Books.Edit;
            DeletePolicyName = BookStorePermissions.Books.Create;
        }

        public override async Task<BookDto> GetAsync(Guid id)
        {
            var book = await Repository.GetAsync(id);
            var bookDto = ObjectMapper.Map<Book, BookDto>(book);

            var author = await _authorRepository.GetAsync(book.AuthorId);
            bookDto.AuthorName = author.Name;

            return bookDto;
        }

        public override async Task<PagedResultDto<BookDto>> GetListAsync(PagedAndSortedResultRequestDto input)
        {
            //Set a default sorting, if not provided
            if (input.Sorting.IsNullOrWhiteSpace())
            {
                input.Sorting = nameof(Book.Name);
            }

            //Get the IQueryable<Book> from the repository
            var queryable = await Repository.GetQueryableAsync();

            //Get the books
            var books = await AsyncExecuter.ToListAsync(
                queryable
                    .OrderBy(input.Sorting)
                    .Skip(input.SkipCount)
                    .Take(input.MaxResultCount)
            );

            //Convert to DTOs
            var bookDtos = ObjectMapper.Map<List<Book>, List<BookDto>>(books);

            //Get a lookup dictionary for the related authors
            var authorDictionary = await GetAuthorDictionaryAsync(books);

            //Set AuthorName for the DTOs
            bookDtos.ForEach(bookDto => bookDto.AuthorName = authorDictionary[bookDto.AuthorId].Name);

            //Get the total count with another query (required for the paging)
            var totalCount = await Repository.GetCountAsync();

            return new PagedResultDto<BookDto>(
                totalCount,
                bookDtos
            );
        }

        public async Task<ListResultDto<AuthorLookupDto>> GetAuthorLookupAsync()
        {
            var authors = await _authorRepository.GetListAsync();

            return new ListResultDto<AuthorLookupDto>(
                ObjectMapper.Map<List<Author>, List<AuthorLookupDto>>(authors)
            );
        }

        private async Task<Dictionary<Guid, Author>> GetAuthorDictionaryAsync(List<Book> books)
        {
            var authorIds = books
                .Select(b => b.AuthorId)
                .Distinct()
                .ToArray();

            var queryable = await _authorRepository.GetQueryableAsync();

            var authors = await AsyncExecuter.ToListAsync(
                queryable.Where(a => authorIds.Contains(a.Id))
            );

            return authors.ToDictionary(x => x.Id, x => x);
        }
    }
}
