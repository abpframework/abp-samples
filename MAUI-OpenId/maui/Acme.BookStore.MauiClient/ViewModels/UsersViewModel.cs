using System.Collections.ObjectModel;
using System.Runtime.CompilerServices;
using Volo.Abp.DependencyInjection;
using Volo.Abp.Identity;

namespace Acme.BookStore.MauiClient.ViewModels;

public class UsersViewModel : BindableObject, ITransientDependency
{
    protected IIdentityUserAppService IdentityUserAppService { get; }

    public GetIdentityUsersInput Input { get; } = new();

    public ObservableCollection<IdentityUserDto> Items { get; } = new();

    public Command RefreshCommand { get; }

    private bool isBusy;
    public bool IsBusy { get => isBusy; set => SetProperty(ref isBusy, value); }

    public UsersViewModel(IIdentityUserAppService identityUserAppService)
    {
        IdentityUserAppService = identityUserAppService;
        GetUsersAsync();
        RefreshCommand = new Command(GetUsersAsync);
    }

    protected async void GetUsersAsync()
    {
        if (IsBusy)
        {
            return; // For preventing parallel request while searching.
        }

        IsBusy = true;

        Items.Clear();

        var result = await IdentityUserAppService.GetListAsync(Input);
        foreach (var user in result.Items)
        {
            Items.Add(user);
        }

        IsBusy = false;
    }

    protected void SetProperty<T>(ref T backField, T value, [CallerMemberName] string propertyName = null)
    {
        backField = value;
        OnPropertyChanged(propertyName);
    }
}
