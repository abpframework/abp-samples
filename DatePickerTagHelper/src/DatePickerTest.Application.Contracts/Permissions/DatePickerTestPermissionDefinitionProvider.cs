using DatePickerTest.Localization;
using Volo.Abp.Authorization.Permissions;
using Volo.Abp.Localization;

namespace DatePickerTest.Permissions;

public class DatePickerTestPermissionDefinitionProvider : PermissionDefinitionProvider
{
    public override void Define(IPermissionDefinitionContext context)
    {
        var myGroup = context.AddGroup(DatePickerTestPermissions.GroupName);
        //Define your own permissions here. Example:
        //myGroup.AddPermission(DatePickerTestPermissions.MyPermission1, L("Permission:MyPermission1"));
    }

    private static LocalizableString L(string name)
    {
        return LocalizableString.Create<DatePickerTestResource>(name);
    }
}
