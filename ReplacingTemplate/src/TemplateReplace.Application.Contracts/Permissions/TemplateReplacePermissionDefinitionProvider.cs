using TemplateReplace.Localization;
using Volo.Abp.Authorization.Permissions;
using Volo.Abp.Localization;

namespace TemplateReplace.Permissions
{
    public class TemplateReplacePermissionDefinitionProvider : PermissionDefinitionProvider
    {
        public override void Define(IPermissionDefinitionContext context)
        {
            var myGroup = context.AddGroup(TemplateReplacePermissions.GroupName);

            //Define your own permissions here. Example:
            //myGroup.AddPermission(TemplateReplacePermissions.MyPermission1, L("Permission:MyPermission1"));
        }

        private static LocalizableString L(string name)
        {
            return LocalizableString.Create<TemplateReplaceResource>(name);
        }
    }
}
