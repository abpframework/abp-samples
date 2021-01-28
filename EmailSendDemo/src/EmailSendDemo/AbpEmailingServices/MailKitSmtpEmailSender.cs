using System.Net.Mail;
using System.Threading.Tasks;
using MailKit.Security;
using Microsoft.Extensions.Options;
using MimeKit;
using SmtpClient = MailKit.Net.Smtp.SmtpClient;

namespace EmailSendDemo.AbpEmailingServices
{
    public class MailKitSmtpEmailSender : EmailSenderBase
    {
        public MailKitSmtpEmailSender(IOptionsSnapshot<MailConfigOptions> settings)
            : base(settings.Get("MailKit"))
        {

        }

        protected override async Task SendEmailAsync(MailMessage mail)
        {
            using (var client = await BuildClientAsync())
            {
                var message = MimeMessage.CreateFromMailMessage(mail);
                await client.SendAsync(message);
                await client.DisconnectAsync(true);
            }
        }

        public async Task<SmtpClient> BuildClientAsync()
        {
            var client = new SmtpClient();

            try
            {
                await ConfigureClient(client);
                return client;
            }
            catch
            {
                client.Dispose();
                throw;
            }
        }

        protected virtual async Task ConfigureClient(SmtpClient client)
        {
            await client.ConnectAsync(
                ConfigOptions.Host,
                ConfigOptions.Port,
                SecureSocketOptions.SslOnConnect // or SecureSocketOptions.xx
            );

            if (ConfigOptions.UseDefaultCredentials)
            {
                return;
            }

            await client.AuthenticateAsync(
                ConfigOptions.UserName,
                ConfigOptions.Password
            );
        }
    }
}
