using System.Threading.Tasks;
using Microsoft.AspNetCore.Components.WebAssembly.Hosting;

namespace Acme.BookStore.Blazor
{
    public class Program
    {
        public static async Task Main(string[] args)
        {
            var builder = WebAssemblyHostBuilder.CreateDefault(args);

            var application = await builder.AddApplicationAsync<BookStoreBlazorModule>(options =>
            {
                options.UseAutofac();
            });

            var host = builder.Build();

            await application.InitializeApplicationAsync(host.Services);

            await host.RunAsync();
        }
    }
}
