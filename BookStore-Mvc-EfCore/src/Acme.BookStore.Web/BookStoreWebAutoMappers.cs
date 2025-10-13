using Acme.BookStore.Authors;
using Acme.BookStore.Books;
using Riok.Mapperly.Abstractions;
using Volo.Abp.Mapperly;

namespace Acme.BookStore.Web;

[Mapper]
public partial class BookDtoToCreateUpdateBookDtoMapper : MapperBase<BookDto, CreateUpdateBookDto>
{
    public override partial CreateUpdateBookDto Map(BookDto source);
    public override partial void Map(BookDto source, CreateUpdateBookDto destination);
}

[Mapper]
public partial class CreateAuthorViewModelToCreateAuthorDtoMapper : MapperBase<Pages.Authors.CreateModalModel.CreateAuthorViewModel, CreateAuthorDto>
{
    public override partial CreateAuthorDto Map(Pages.Authors.CreateModalModel.CreateAuthorViewModel source);
    public override partial void Map(Pages.Authors.CreateModalModel.CreateAuthorViewModel source, CreateAuthorDto destination);
}

[Mapper]
public partial class AuthorDtoToEditAuthorViewModelMapper : MapperBase<AuthorDto, Pages.Authors.EditModalModel.EditAuthorViewModel>
{
    public override partial Pages.Authors.EditModalModel.EditAuthorViewModel Map(AuthorDto source);
    public override partial void Map(AuthorDto source, Pages.Authors.EditModalModel.EditAuthorViewModel destination);
}

[Mapper]
public partial class EditAuthorViewModelToUpdateAuthorDtoMapper : MapperBase<Pages.Authors.EditModalModel.EditAuthorViewModel, UpdateAuthorDto>
{
    public override partial UpdateAuthorDto Map(Pages.Authors.EditModalModel.EditAuthorViewModel source);
    public override partial void Map(Pages.Authors.EditModalModel.EditAuthorViewModel source, UpdateAuthorDto destination);
}

[Mapper]
public partial class CreateBookViewModelToCreateUpdateBookDtoMapper : MapperBase<Pages.Books.CreateModalModel.CreateBookViewModel, CreateUpdateBookDto>
{
    public override partial CreateUpdateBookDto Map(Pages.Books.CreateModalModel.CreateBookViewModel source);
    public override partial void Map(Pages.Books.CreateModalModel.CreateBookViewModel source, CreateUpdateBookDto destination);
}

[Mapper]
public partial class BookDtoToEditBookViewModelMapper : MapperBase<BookDto, Pages.Books.EditModalModel.EditBookViewModel>
{
    public override partial Pages.Books.EditModalModel.EditBookViewModel Map(BookDto source);
    public override partial void Map(BookDto source, Pages.Books.EditModalModel.EditBookViewModel destination);
}

[Mapper]
public partial class EditBookViewModelToCreateUpdateBookDtoMapper : MapperBase<Pages.Books.EditModalModel.EditBookViewModel, CreateUpdateBookDto>
{
    public override partial CreateUpdateBookDto Map(Pages.Books.EditModalModel.EditBookViewModel source);
    public override partial void Map(Pages.Books.EditModalModel.EditBookViewModel source, CreateUpdateBookDto destination);
}