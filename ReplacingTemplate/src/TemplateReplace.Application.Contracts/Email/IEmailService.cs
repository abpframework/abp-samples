using System.Threading.Tasks;

namespace TemplateReplace.Email
{
    public interface IEmailService
    {
        Task SendAsync();
    }
}