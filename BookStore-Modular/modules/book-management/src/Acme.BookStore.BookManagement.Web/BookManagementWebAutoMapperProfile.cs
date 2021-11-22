using Acme.BookStore.BookManagement.Authors;
using Acme.BookStore.BookManagement.Books;
using AutoMapper;

namespace Acme.BookStore.BookManagement.Web
{
    public class BookManagementWebAutoMapperProfile : Profile
    {
        public BookManagementWebAutoMapperProfile()
        {
            CreateMap<BookDto, CreateUpdateBookDto>();
            
            CreateMap<Pages.Authors.CreateModalModel.CreateAuthorViewModel,
                CreateAuthorDto>();
            
            CreateMap<AuthorDto, Pages.Authors.EditModalModel.EditAuthorViewModel>();
            
            CreateMap<Pages.Authors.EditModalModel.EditAuthorViewModel,
                UpdateAuthorDto>();
            
            CreateMap<Pages.Books.CreateModalModel.CreateBookViewModel, CreateUpdateBookDto>();
            
            CreateMap<BookDto, Pages.Books.EditModalModel.EditBookViewModel>();
            
            CreateMap<Pages.Books.EditModalModel.EditBookViewModel, CreateUpdateBookDto>();
        }
    }
}