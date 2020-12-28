using Acme.BookStore.AngularMaterial.Authors;
using Acme.BookStore.AngularMaterial.Books;
using AutoMapper;

namespace Acme.BookStore.AngularMaterial
{
    public class AngularMaterialApplicationAutoMapperProfile : Profile
    {
        public AngularMaterialApplicationAutoMapperProfile()
        {
            /* You can configure your AutoMapper mapping configuration here.
             * Alternatively, you can split your mapping configurations
             * into multiple profile classes for a better organization. */
            CreateMap<Book, BookDto>();
            CreateMap<CreateUpdateBookDto, Book>();
            CreateMap<Author, AuthorDto>();
            CreateMap<Author, AuthorLookupDto>();
            CreateMap<CreateAuthorWithBookDto, Author>();
            CreateMap<CreateBookDto, Book>();
            CreateMap<Author, AuthorWithDetailsDto>();
        }
    }
}
