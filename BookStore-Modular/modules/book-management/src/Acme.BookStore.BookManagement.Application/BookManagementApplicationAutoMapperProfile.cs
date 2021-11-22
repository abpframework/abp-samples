using Acme.BookStore.BookManagement.Authors;
using Acme.BookStore.BookManagement.Books;
using AutoMapper;

namespace Acme.BookStore.BookManagement
{
    public class BookManagementApplicationAutoMapperProfile : Profile
    {
        public BookManagementApplicationAutoMapperProfile()
        {
            CreateMap<Book, BookDto>()
                .ForMember(x => x.AuthorName, opt => opt.Ignore());
            
            CreateMap<CreateUpdateBookDto, Book>(MemberList.Source);
            
            CreateMap<Author, AuthorDto>();
            
            CreateMap<Author, AuthorLookupDto>();
        }
    }
}