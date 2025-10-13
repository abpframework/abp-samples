using Acme.BookStore.Authors;
using Acme.BookStore.Books;
using Riok.Mapperly.Abstractions;
using System;
using System.Collections.Generic;
using System.Text;
using Volo.Abp.Mapperly;

namespace Acme.BookStore;

[Mapper]
public partial class BookToBookDtoMapper : MapperBase<Book, BookDto>
{
    public override partial BookDto Map(Book source);
    public override partial void Map (Book source, BookDto destination);
}

[Mapper]
public partial class CreateUpdateBookDtoToBookMapper : MapperBase<CreateUpdateBookDto, Book>
{
    public override partial Book Map(CreateUpdateBookDto source);
    public override partial void Map (CreateUpdateBookDto source, Book destination);
}

[Mapper]
public partial class AuthorToAuthorDtoMapper : MapperBase<Author, AuthorDto>
{
    public override partial AuthorDto Map(Author source);
    public override partial void Map (Author source, AuthorDto destination);
}

[Mapper]
public partial class AuthorToAuthorLookupDtoMapper : MapperBase<Author, AuthorLookupDto>
{
    public override partial AuthorLookupDto Map(Author source);
    public override partial void Map (Author source, AuthorLookupDto destination);
}