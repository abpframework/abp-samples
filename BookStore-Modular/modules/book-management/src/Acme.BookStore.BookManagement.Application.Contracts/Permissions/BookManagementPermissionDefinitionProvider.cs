using Acme.BookStore.BookManagement.Localization;
using Acme.BookStore.BookManagement.Permissions;
using Volo.Abp.Authorization.Permissions;
using Volo.Abp.Localization;

namespace Acme.BookStore.BookManagement.Permissions
{
    public class BookManagementPermissionDefinitionProvider : PermissionDefinitionProvider
    {
        public override void Define(IPermissionDefinitionContext context)
        {
            var bookStoreGroup = context.AddGroup(BookManagementPermissions.GroupName, L("Permission:BookManagement"));

            var booksPermission = bookStoreGroup.AddPermission(BookManagementPermissions.Books.Default, L("Permission:Books"));
            booksPermission.AddChild(BookManagementPermissions.Books.Create, L("Permission:Books.Create"));
            booksPermission.AddChild(BookManagementPermissions.Books.Edit, L("Permission:Books.Edit"));
            booksPermission.AddChild(BookManagementPermissions.Books.Delete, L("Permission:Books.Delete"));

            var authorsPermission = bookStoreGroup.AddPermission(BookManagementPermissions.Authors.Default, L("Permission:Authors"));
            authorsPermission.AddChild(BookManagementPermissions.Authors.Create, L("Permission:Authors.Create"));
            authorsPermission.AddChild(BookManagementPermissions.Authors.Edit, L("Permission:Authors.Edit"));
            authorsPermission.AddChild(BookManagementPermissions.Authors.Delete, L("Permission:Authors.Delete"));
        }

        private static LocalizableString L(string name)
        {
            return LocalizableString.Create<BookManagementResource>(name);
        }
    }
}