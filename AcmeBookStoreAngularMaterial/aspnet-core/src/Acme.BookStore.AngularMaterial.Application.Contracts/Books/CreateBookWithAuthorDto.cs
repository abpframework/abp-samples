using System.Collections.Generic;
using Acme.BookStore.AngularMaterial.Authors;


namespace Acme.BookStore.AngularMaterial.Books
{
    public class CreateBookWithAuthorDto
    {
        public AuthorDto Author { get; set; }
        public ICollection<CreateBookDto> Books { get; set; }

        public CreateBookWithAuthorDto()
        {
            Books = new List<CreateBookDto>();
        }
    }
}