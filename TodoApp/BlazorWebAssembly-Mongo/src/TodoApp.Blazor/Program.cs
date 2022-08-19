using System.Threading.Tasks;
using Microsoft.AspNetCore.Components.WebAssembly.Hosting;

namespace TodoApp.Blazor
{
    public class Program
    {
        public static async Task Main(string[] args)
        {
            var builder = WebAssemblyHostBuilder.CreateDefault(args);

            var application = builder.AddApplication<TodoAppBlazorModule>(options =>
            {
                options.UseAutofac();
            });

            var host = builder.Build();

            await application.InitializeApplicationAsync(host.Services);

            await host.RunAsync();
        }
    }
}
