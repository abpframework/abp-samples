using System.Collections.Generic;
using Acme.BookStore.AngularMaterial.Authors;


namespace Acme.BookStore.AngularMaterial.Books
{
    public class CreateAuthorWithBookDto: CreateAuthorDto
    { 
        public ICollection<CreateBookDto> Books { get; set; }

        public CreateAuthorWithBookDto()
        {
            Books = new List<CreateBookDto>();
        }
    }
}