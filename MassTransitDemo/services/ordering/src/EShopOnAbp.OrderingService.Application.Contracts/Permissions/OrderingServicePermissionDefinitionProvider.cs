using EShopOnAbp.OrderingService.Localization;
using Volo.Abp.Authorization.Permissions;
using Volo.Abp.Localization;

namespace EShopOnAbp.OrderingService.Permissions
{
    public class OrderingServicePermissionDefinitionProvider : PermissionDefinitionProvider
    {
        public override void Define(IPermissionDefinitionContext context)
        {
            var orderManagmentGroup = context.AddGroup(OrderingServicePermissions.GroupName, L("Permission:OrderingService"));

            var oders = orderManagmentGroup.AddPermission(OrderingServicePermissions.Orders.Default, L("Permission:Orders"));
            oders.AddChild(OrderingServicePermissions.Orders.SetAsCancelled, L("Permission:Orders.SetAsCancelled"));
            oders.AddChild(OrderingServicePermissions.Orders.SetAsShipped, L("Permission:Orders.SetAsShipped"));

            orderManagmentGroup.AddPermission(OrderingServicePermissions.Orders.Dashboard, L("Permission:Dashboard"));
        }

        private static LocalizableString L(string name)
        {
            return LocalizableString.Create<OrderingServiceResource>(name);
        }
    }
}