using System;
using System.Threading.Tasks;
using MudBlazor;
using Volo.Abp.AspNetCore.Components.Notifications;
using Volo.Abp.DependencyInjection;

namespace Volo.Abp.AspNetCore.Components.Web.BasicTheme.Services;

[Dependency(ReplaceServices = true)]
public class MudBlazorUiNotificationService : IUiNotificationService, IScopedDependency
{
    private readonly ISnackbar _snackbar;

    public MudBlazorUiNotificationService(ISnackbar snackbar)
    {
        _snackbar = snackbar;
    }

    public Task Error(string message, string title = null, Action<UiNotificationOptions> options = null)
    {
        _snackbar.Add(message, Severity.Error);
        return Task.CompletedTask;
    }

    public Task Info(string message, string title = null, Action<UiNotificationOptions> options = null)
    {
        _snackbar.Add(message, Severity.Info);
        return Task.CompletedTask;
    }

    public Task Success(string message, string title = null, Action<UiNotificationOptions> options = null)
    {
        _snackbar.Add(message, Severity.Success);
        return Task.CompletedTask;
    }

    public Task Warn(string message, string title = null, Action<UiNotificationOptions> options = null)
    {
        _snackbar.Add(message, Severity.Warning);
        return Task.CompletedTask;
    }
}