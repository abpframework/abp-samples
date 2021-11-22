using Volo.Abp;

namespace Acme.BookStore.BookManagement.Authors
{
    public class AuthorAlreadyExistsException : BusinessException
    {
        public AuthorAlreadyExistsException(string name)
            : base(BookManagementDomainErrorCodes.AuthorAlreadyExists)
        {
            WithData("name", name);
        }
    }
}