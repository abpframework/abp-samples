using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using Acme.BookStore.AngularMaterial.Authors;

namespace Acme.BookStore.AngularMaterial.Books
{
    public class AuthorWithDetailsDto: AuthorDto
    {
        [Required] 
        public ICollection<BookDto> Books { get; set; }

        public AuthorWithDetailsDto()
        {
            Books = new List<BookDto>();
        }
    }
}