using Acme.BookStore.Authors;
using Acme.BookStore.Books;
using Riok.Mapperly.Abstractions;
using Volo.Abp.Mapperly;

namespace Acme.BookStore.Blazor;


[Mapper]
public partial class BookDtoToCreateUpdateBookDtoMapper : MapperBase<BookDto, CreateUpdateBookDto>
{
    public override partial CreateUpdateBookDto Map(BookDto source);
    public override partial void Map(BookDto source, CreateUpdateBookDto destination);
}

[Mapper]
public partial class AuthorDtoToUpdateAuthorDtoMapper : MapperBase<AuthorDto, UpdateAuthorDto>
{
    public override partial UpdateAuthorDto Map(AuthorDto source);
    public override partial void Map(AuthorDto source, UpdateAuthorDto destination);
}