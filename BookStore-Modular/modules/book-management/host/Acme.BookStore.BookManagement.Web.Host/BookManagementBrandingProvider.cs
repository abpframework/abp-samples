using Volo.Abp.DependencyInjection;
using Volo.Abp.Ui.Branding;

namespace Acme.BookStore.BookManagement
{
    [Dependency(ReplaceServices = true)]
    public class BookManagementBrandingProvider : DefaultBrandingProvider
    {
        public override string AppName => "BookManagement";
    }
}
