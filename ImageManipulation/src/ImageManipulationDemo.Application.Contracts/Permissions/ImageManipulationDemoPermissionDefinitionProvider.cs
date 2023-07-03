using ImageManipulationDemo.Localization;
using Volo.Abp.Authorization.Permissions;
using Volo.Abp.Localization;

namespace ImageManipulationDemo.Permissions;

public class ImageManipulationDemoPermissionDefinitionProvider : PermissionDefinitionProvider
{
    public override void Define(IPermissionDefinitionContext context)
    {
        var myGroup = context.AddGroup(ImageManipulationDemoPermissions.GroupName);
        //Define your own permissions here. Example:
        //myGroup.AddPermission(ImageManipulationDemoPermissions.MyPermission1, L("Permission:MyPermission1"));
    }

    private static LocalizableString L(string name)
    {
        return LocalizableString.Create<ImageManipulationDemoResource>(name);
    }
}
