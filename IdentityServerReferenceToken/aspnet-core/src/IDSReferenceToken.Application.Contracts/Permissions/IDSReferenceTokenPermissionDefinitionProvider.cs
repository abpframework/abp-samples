using IDSReferenceToken.Localization;
using Volo.Abp.Authorization.Permissions;
using Volo.Abp.Localization;

namespace IDSReferenceToken.Permissions
{
    public class IDSReferenceTokenPermissionDefinitionProvider : PermissionDefinitionProvider
    {
        public override void Define(IPermissionDefinitionContext context)
        {
            var myGroup = context.AddGroup(IDSReferenceTokenPermissions.GroupName);

            //Define your own permissions here. Example:
            //myGroup.AddPermission(IDSReferenceTokenPermissions.MyPermission1, L("Permission:MyPermission1"));
        }

        private static LocalizableString L(string name)
        {
            return LocalizableString.Create<IDSReferenceTokenResource>(name);
        }
    }
}
