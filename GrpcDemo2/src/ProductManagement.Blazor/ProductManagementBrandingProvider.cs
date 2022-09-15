using Volo.Abp.DependencyInjection;
using Volo.Abp.Ui.Branding;

namespace ProductManagement.Blazor;

[Dependency(ReplaceServices = true)]
public class ProductManagementBrandingProvider : DefaultBrandingProvider
{
    public override string AppName => "ProductManagement";
}
