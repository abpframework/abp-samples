using MovieCollectionApp.Localization;
using Volo.Abp.Authorization.Permissions;
using Volo.Abp.Localization;
using Volo.Abp.MultiTenancy;

namespace MovieCollectionApp.Permissions;

public class MovieCollectionAppPermissionDefinitionProvider : PermissionDefinitionProvider
{
    public override void Define(IPermissionDefinitionContext context)
    {
        var myGroup = context.AddGroup(MovieCollectionAppPermissions.GroupName);

        var moviesPermission = myGroup.AddPermission(MovieCollectionAppPermissions.Movies.Default, L("Permission:Movies"));
        moviesPermission.AddChild(MovieCollectionAppPermissions.Movies.Create, L("Permission:Movies.Create"));
        moviesPermission.AddChild(MovieCollectionAppPermissions.Movies.Edit, L("Permission:Movies.Edit"));
        moviesPermission.AddChild(MovieCollectionAppPermissions.Movies.Delete, L("Permission:Movies.Delete"));

        var actorsPermission = myGroup.AddPermission(MovieCollectionAppPermissions.Actors.Default, L("Permission:Actors"));
        actorsPermission.AddChild(MovieCollectionAppPermissions.Actors.Create, L("Permission:Actors.Create"));
        actorsPermission.AddChild(MovieCollectionAppPermissions.Actors.Edit, L("Permission:Actors.Edit"));
        actorsPermission.AddChild(MovieCollectionAppPermissions.Actors.Delete, L("Permission:Actors.Delete"));

        var genresPermission = myGroup.AddPermission(MovieCollectionAppPermissions.Genres.Default, L("Permission:Genres"));
        genresPermission.AddChild(MovieCollectionAppPermissions.Genres.Create, L("Permission:Genres.Create"));
        genresPermission.AddChild(MovieCollectionAppPermissions.Genres.Edit, L("Permission:Genres.Edit"));
        genresPermission.AddChild(MovieCollectionAppPermissions.Genres.Delete, L("Permission:Genres.Delete"));
    }

    private static LocalizableString L(string name)
    {
        return LocalizableString.Create<MovieCollectionAppResource>(name);
    }
}
