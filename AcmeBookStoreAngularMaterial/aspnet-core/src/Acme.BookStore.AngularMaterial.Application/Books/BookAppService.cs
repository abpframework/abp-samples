using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Acme.BookStore.AngularMaterial.Authors;
using Acme.BookStore.AngularMaterial.Permissions;
using Microsoft.AspNetCore.Authorization;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;
using Volo.Abp.Domain.Entities;
using Volo.Abp.Domain.Repositories;

namespace Acme.BookStore.AngularMaterial.Books
{
    [Authorize(AngularMaterialPermissions.Books.Default)]
    public class BookAppService:
        CrudAppService<
            Book, //The Book entity
            BookDto, //Used to show books
            Guid, //Primary key of the book entity
            PagedAndSortedResultRequestDto, //Used for paging/sorting
            CreateUpdateBookDto>, //Used to create/update a book
        IBookAppService //implement the IBookAppService
    {
        private readonly IAuthorRepository _authorRepository;
        private readonly AuthorManager _authorManager;
        public BookAppService(
            IRepository<Book, Guid> repository,
            IAuthorRepository authorRepository,
            AuthorManager authorManager)

            : base(repository)
        {
            _authorRepository = authorRepository;
            _authorManager = authorManager;
            GetPolicyName = AngularMaterialPermissions.Books.Default;
            GetListPolicyName = AngularMaterialPermissions.Books.Default;
            CreatePolicyName = AngularMaterialPermissions.Books.Create;
            UpdatePolicyName = AngularMaterialPermissions.Books.Edit;
            DeletePolicyName = AngularMaterialPermissions.Books.Delete;
        }

         public override async Task<BookDto> GetAsync(Guid id)
        {
            await CheckGetPolicyAsync();

            //Prepare a query to join books and authors
            var query = from book in await Repository.GetQueryableAsync()
                join author in await _authorRepository.GetQueryableAsync() on book.AuthorId equals author.Id
                where book.Id == id
                select new { book, author };

            //Execute the query and get the book with author
            var queryResult = await AsyncExecuter.FirstOrDefaultAsync(query);
            if (queryResult == null)
            {
                throw new EntityNotFoundException(typeof(Book), id);
            }

            var bookDto = ObjectMapper.Map<Book, BookDto>(queryResult.book);
            bookDto.AuthorName = queryResult.author.Name;
            return bookDto;
        }

        public override async Task<PagedResultDto<BookDto>> GetListAsync(
            PagedAndSortedResultRequestDto input)
        {
            await CheckGetListPolicyAsync();

            //Prepare a query to join books and authors
            var query = from book in await Repository.GetQueryableAsync()
                join author in await _authorRepository.GetQueryableAsync() on book.AuthorId equals author.Id
                orderby input.Sorting
                select new {book, author};

            query = query
                .Skip(input.SkipCount)
                .Take(input.MaxResultCount);

            //Execute the query and get a list
            var queryResult = await AsyncExecuter.ToListAsync(query);

            //Convert the query result to a list of BookDto objects
            var bookDtos = queryResult.Select(x =>
            {
                var bookDto = ObjectMapper.Map<Book, BookDto>(x.book);
                bookDto.AuthorName = x.author.Name;
                return bookDto;
            }).ToList();

            //Get the total count with another query
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

        public async Task<AuthorWithDetailsDto> CreateAuthorWithBooksAsync(CreateAuthorWithBookDto input)
        {
            var author =  await _authorManager.CreateAsync(
                input.Name,
                input.BirthDate,
                input.ShortBio
            );

            var createdAuthor = await _authorRepository.InsertAsync(author);
            var authorWithBooks = ObjectMapper.Map<Author, AuthorWithDetailsDto>(createdAuthor);
            foreach (var book in input.Books)
            {
                var bookEntity = ObjectMapper.Map<CreateBookDto, Book>(book);
                bookEntity.AuthorId = author.Id;
                var createdBook = await Repository.InsertAsync(bookEntity);
                var bookDto = ObjectMapper.Map<Book, BookDto>(createdBook);
                bookDto.AuthorName = author.Name;
                authorWithBooks.Books.Add(bookDto);
            }

            return authorWithBooks;
        }
    }
}
