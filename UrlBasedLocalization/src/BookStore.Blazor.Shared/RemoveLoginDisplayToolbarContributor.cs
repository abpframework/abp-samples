using System.Threading.Tasks;
using Volo.Abp.AspNetCore.Components.Web.Theming.Toolbars;

namespace BookStore.Blazor.Shared;

public class RemoveLoginDisplayToolbarContributor : IToolbarContributor
{
    public Task ConfigureToolbarAsync(IToolbarConfigurationContext context)
    {
        context.Toolbar.Items.RemoveAll(i => i.ComponentType.Name == "LoginDisplay");
        return Task.CompletedTask;
    }
}
