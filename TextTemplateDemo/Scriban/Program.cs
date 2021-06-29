using System;
using System.Threading.Tasks;
using Microsoft.Extensions.DependencyInjection;
using TextTemplateDemo.Demos.GlobalContext;
using TextTemplateDemo.Demos.Hello;
using TextTemplateDemo.Demos.PasswordReset;
using TextTemplateDemo.Demos.TemplateContent;
using TextTemplateDemo.Demos.WelcomeEmail;
using Volo.Abp;

namespace TextTemplateDemo
{
    class Program
    {
        static async Task Main(string[] args)
        {
            using (var application = AbpApplicationFactory.Create<TextTemplateDemoModule>(options =>
            {
                options.UseAutofac();
            }))
            {
                application.Initialize();

                var helloDemo = application.ServiceProvider.GetRequiredService<HelloDemo>();
                var passwordResetDemo = application.ServiceProvider.GetRequiredService<PasswordResetDemo>();
                var welcomeEmailDemo = application.ServiceProvider.GetRequiredService<WelcomeEmailDemo>();
                var globalContextDemo = application.ServiceProvider.GetRequiredService<GlobalContextUsageDemo>();
                var templateContentDemo = application.ServiceProvider.GetRequiredService<TemplateContentDemo>();

                await helloDemo.RunAsync();
                await helloDemo.RunWithAnonymousModelAsync();

                await passwordResetDemo.RunAsync();

                await welcomeEmailDemo.RunAsync("en");
                await welcomeEmailDemo.RunAsync("tr");

                await globalContextDemo.RunAsync();

                await templateContentDemo.RunAsync();

                Console.WriteLine();
                Console.WriteLine("Press enter to exit...");
                Console.ReadLine();

                application.Shutdown();
            }
        }
    }
}
