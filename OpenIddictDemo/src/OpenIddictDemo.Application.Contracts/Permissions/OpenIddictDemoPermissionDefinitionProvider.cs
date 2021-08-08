using OpenIddictDemo.Localization;
using Volo.Abp.Authorization.Permissions;
using Volo.Abp.Localization;

namespace OpenIddictDemo.Permissions
{
    public class OpenIddictDemoPermissionDefinitionProvider : PermissionDefinitionProvider
    {
        public override void Define(IPermissionDefinitionContext context)
        {
            var myGroup = context.AddGroup(OpenIddictDemoPermissions.GroupName);

            //Define your own permissions here. Example:
            myGroup.AddPermission(OpenIddictDemoPermissions.TestClient, L("Permission:TestClient"))
                .WithProviders(ClientPermissionValueProvider.ProviderName);
        }

        private static LocalizableString L(string name)
        {
            return LocalizableString.Create<OpenIddictDemoResource>(name);
        }
    }
}
