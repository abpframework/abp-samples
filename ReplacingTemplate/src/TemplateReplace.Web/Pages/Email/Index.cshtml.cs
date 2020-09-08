using Microsoft.AspNetCore.Mvc.RazorPages;
using TemplateReplace.Email;

namespace TemplateReplace.Web.Pages.Email
{
    public class IndexModel : PageModel
    {
        private readonly IEmailService _emailService;
        public string EmailBody { get; set; }

        public IndexModel(IEmailService emailService)
        {
            _emailService = emailService;
        }
        
        public async void OnGet()
        {
            EmailBody = await _emailService.SendAsync();
        }
    }
}