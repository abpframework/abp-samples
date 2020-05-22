using GrpcDemo.Localization;
using Volo.Abp.Authorization.Permissions;
using Volo.Abp.Localization;

namespace GrpcDemo.Permissions
{
    public class GrpcDemoPermissionDefinitionProvider : PermissionDefinitionProvider
    {
        public override void Define(IPermissionDefinitionContext context)
        {
            var myGroup = context.AddGroup(GrpcDemoPermissions.GroupName);

            //Define your own permissions here. Example:
            //myGroup.AddPermission(GrpcDemoPermissions.MyPermission1, L("Permission:MyPermission1"));
        }

        private static LocalizableString L(string name)
        {
            return LocalizableString.Create<GrpcDemoResource>(name);
        }
    }
}
