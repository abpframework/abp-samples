using Acme.BookStore.Books;
using AutoMapper;

namespace Acme.BookStore.Blazor.Client;

public class BookStoreBlazorAutoMapperProfile : Profile
{
    public BookStoreBlazorAutoMapperProfile()
    {
        CreateMap<BookDto, CreateUpdateBookDto>();
        //Define your AutoMapper configuration here for the Blazor project.
    }
}