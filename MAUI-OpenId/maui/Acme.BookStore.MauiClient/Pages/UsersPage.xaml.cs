using Acme.BookStore.MauiClient.ViewModels;
using Volo.Abp.DependencyInjection;

namespace Acme.BookStore.MauiClient;

public partial class UsersPage : ContentPage, ITransientDependency
{
    public UsersViewModel ViewModel { get; }

    public UsersPage(UsersViewModel viewModel)
    {
        ViewModel = viewModel;
        InitializeComponent();
    }
}