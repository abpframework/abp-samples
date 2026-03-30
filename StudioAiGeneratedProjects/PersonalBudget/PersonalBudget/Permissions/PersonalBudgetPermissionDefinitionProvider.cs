using PersonalBudget.Localization;
using Volo.Abp.Authorization.Permissions;
using Volo.Abp.Localization;
using Volo.Abp.MultiTenancy;

namespace PersonalBudget.Permissions;

public class PersonalBudgetPermissionDefinitionProvider : PermissionDefinitionProvider
{
    public override void Define(IPermissionDefinitionContext context)
    {
        var myGroup = context.AddGroup(PersonalBudgetPermissions.GroupName, L("Permission:PersonalBudget"));

        // Categories permissions
        var categoriesPermission = myGroup.AddPermission(
            PersonalBudgetPermissions.Categories.Default,
            L("Permission:Categories"));
        categoriesPermission.AddChild(
            PersonalBudgetPermissions.Categories.Create,
            L("Permission:Categories.Create"));
        categoriesPermission.AddChild(
            PersonalBudgetPermissions.Categories.Edit,
            L("Permission:Categories.Edit"));
        categoriesPermission.AddChild(
            PersonalBudgetPermissions.Categories.Delete,
            L("Permission:Categories.Delete"));

        // Expenses permissions
        var expensesPermission = myGroup.AddPermission(
            PersonalBudgetPermissions.Expenses.Default,
            L("Permission:Expenses"));
        expensesPermission.AddChild(
            PersonalBudgetPermissions.Expenses.Create,
            L("Permission:Expenses.Create"));
        expensesPermission.AddChild(
            PersonalBudgetPermissions.Expenses.Edit,
            L("Permission:Expenses.Edit"));
        expensesPermission.AddChild(
            PersonalBudgetPermissions.Expenses.Delete,
            L("Permission:Expenses.Delete"));
    }

    private static LocalizableString L(string name)
    {
        return LocalizableString.Create<PersonalBudgetResource>(name);
    }
}
