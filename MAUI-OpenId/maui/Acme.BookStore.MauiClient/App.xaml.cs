namespace Acme.BookStore.MauiClient;

public partial class App : Application
{
	public App(MainPage mainPage, IHttpClientFactory httpClientFactory)
	{
		InitializeComponent();

		MainPage = mainPage;
	}
}
