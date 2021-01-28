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
        private readonly AbpMailKitOptions _mailKitOptions;

        public MailKitSmtpEmailSender(
            IOptionsSnapshot<MailConfigOptions> settings,
            IOptions<AbpMailKitOptions> mailKitOptions)
            : base(settings.Get("MailKit"))
        {
            _mailKitOptions = mailKitOptions.Value;
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
                GetSecureSocketOption()
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

        protected virtual SecureSocketOptions GetSecureSocketOption()
        {
            if (_mailKitOptions.SecureSocketOption.HasValue)
            {
                return _mailKitOptions.SecureSocketOption.Value;
            }

            return ConfigOptions.EnableSsl
                ? SecureSocketOptions.SslOnConnect
                : SecureSocketOptions.StartTlsWhenAvailable;
        }
    }
}
