using Volo.Abp;

namespace Acme.BookStore.AngularMaterial.Authors
{
    public class AuthorAlreadyExistsException : BusinessException
    {
        public AuthorAlreadyExistsException(string name)
            : base(AngularMaterialDomainErrorCodes.AuthorAlreadyExists)
        {
            WithData("name", name);
        }
    }
}