using System;
using Volo.Abp.Application.Dtos;

namespace Acme.BookStore.BookManagement.Books
{
    public class AuthorLookupDto : EntityDto<Guid>
    {
        public string Name { get; set; }
    }
}