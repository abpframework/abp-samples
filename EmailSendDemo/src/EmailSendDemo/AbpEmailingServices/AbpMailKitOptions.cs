using MailKit.Security;

namespace EmailSendDemo.AbpEmailingServices
{
    public class AbpMailKitOptions
    {
        public SecureSocketOptions? SecureSocketOption { get; set; }
    }
}
