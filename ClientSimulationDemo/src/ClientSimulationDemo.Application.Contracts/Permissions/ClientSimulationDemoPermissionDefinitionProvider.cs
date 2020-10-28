using ClientSimulationDemo.Localization;
using Volo.Abp.Authorization.Permissions;
using Volo.Abp.Localization;

namespace ClientSimulationDemo.Permissions
{
    public class ClientSimulationDemoPermissionDefinitionProvider : PermissionDefinitionProvider
    {
        public override void Define(IPermissionDefinitionContext context)
        {
            var myGroup = context.AddGroup(ClientSimulationDemoPermissions.GroupName);

            //Define your own permissions here. Example:
            //myGroup.AddPermission(ClientSimulationDemoPermissions.MyPermission1, L("Permission:MyPermission1"));
        }

        private static LocalizableString L(string name)
        {
            return LocalizableString.Create<ClientSimulationDemoResource>(name);
        }
    }
}
