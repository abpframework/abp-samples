using System;
using System.Threading.Tasks;
using EmailSendDemo.AbpEmailingServices;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;

namespace EmailSendDemo
{
    public class Program
    {
        public static async Task Main(string[] args)
        {
            var services = new ServiceCollection();

            services.AddLogging(builder =>
            {
                builder.AddConsole();
            });

            services.Configure<MailConfigOptions>("Smtp", options =>
            {
                options.Host = "smtp.sendgrid.net";
                options.Port = 587;
                options.UserName = "your username";
                options.Password = "your password";
                options.Domain = "";
                options.EnableSsl = false;
                options.UseDefaultCredentials = false;
                options.DefaultFromAddress = "noreply@abp.io";
                options.DefaultFromDisplayName = "ABP application";
            });

            services.Configure<MailConfigOptions>("MailKit", options =>
            {
                options.Host = "smtp.sendgrid.net";
                options.Port = 465;
                options.UserName = "your username";
                options.Password = "your password";
                options.Domain = "";
                options.EnableSsl = true;
                options.UseDefaultCredentials = false;
                options.DefaultFromAddress = "noreply@abp.io";
                options.DefaultFromDisplayName = "ABP application";
            });

            services.AddTransient<MailTestService>();
            services.AddTransient<SmtpEmailSender>();
            services.AddTransient<MailKitSmtpEmailSender>();
            var serviceProvider = services.BuildServiceProvider();

            await serviceProvider.GetRequiredService<MailTestService>().RunAsync();
        }
    }

    public class MailTestService
    {
        private readonly SmtpEmailSender _smtpEmailSender;
        private readonly MailKitSmtpEmailSender _mailKitSmtpEmailSender;

        public MailTestService(SmtpEmailSender smtpEmailSender, MailKitSmtpEmailSender mailKitSmtpEmailSender)
        {
            _smtpEmailSender = smtpEmailSender;
            _mailKitSmtpEmailSender = mailKitSmtpEmailSender;
        }

        public async Task RunAsync()
        {
            await _smtpEmailSender.SendAsync("youremail@example.com", "hi, i'm smtp", "how are you?");
            await _mailKitSmtpEmailSender.SendAsync("youremail@example.com", "hi, i'm mailKit", "how are you?");
            Console.WriteLine("hello world!");
        }
    }
}
