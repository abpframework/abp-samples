using ModularCrm.Payment.Localization;
using Volo.Abp.Authorization.Permissions;
using Volo.Abp.Localization;

namespace ModularCrm.Payment.Permissions;

public class PaymentPermissionDefinitionProvider : PermissionDefinitionProvider
{
    public override void Define(IPermissionDefinitionContext context)
    {
        var myGroup = context.AddGroup(PaymentPermissions.GroupName, L("Permission:Payment"));
    }

    private static LocalizableString L(string name)
    {
        return LocalizableString.Create<PaymentResource>(name);
    }
}
