namespace Acme.BookStore.MauiClient;

public partial class App : Application
{
	public App(MainPage mainPage)
	{
		InitializeComponent();

		MainPage = mainPage;
	}
}
