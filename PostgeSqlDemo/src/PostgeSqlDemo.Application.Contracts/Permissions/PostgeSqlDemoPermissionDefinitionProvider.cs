using PostgeSqlDemo.Localization;
using Volo.Abp.Authorization.Permissions;
using Volo.Abp.Localization;

namespace PostgeSqlDemo.Permissions
{
    public class PostgeSqlDemoPermissionDefinitionProvider : PermissionDefinitionProvider
    {
        public override void Define(IPermissionDefinitionContext context)
        {
            var myGroup = context.AddGroup(PostgeSqlDemoPermissions.GroupName);

            //Define your own permissions here. Example:
            //myGroup.AddPermission(PostgeSqlDemoPermissions.MyPermission1, L("Permission:MyPermission1"));
        }

        private static LocalizableString L(string name)
        {
            return LocalizableString.Create<PostgeSqlDemoResource>(name);
        }
    }
}
