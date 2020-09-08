using TemplateReplace.Email;

namespace TemplateReplace.Web.Pages
{
    public class IndexModel : TemplateReplacePageModel
    {
        private readonly IEmailService _emailService;

        public IndexModel(IEmailService emailService)
        {
            _emailService = emailService;
        }
        
        public async void OnGet()
        {
            //send email
            await _emailService.SendAsync();
        }
    }
}