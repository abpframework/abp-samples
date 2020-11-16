using Acme.BookStore.AngularMaterial.Books;
using Acme.BookStore.Books;
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

        }
    }
}
