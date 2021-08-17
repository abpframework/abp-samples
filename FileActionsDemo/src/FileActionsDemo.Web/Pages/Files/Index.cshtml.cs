using System.ComponentModel.DataAnnotations;
using System.IO;
using System.Threading.Tasks;
using FileActionsDemo.Storage;
using FileActionsDemo.Storage.Dto;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Volo.Abp.AspNetCore.Mvc.UI.RazorPages;

namespace FileActionsDemo.Web.Pages.Files
{
    [DisableCors]
    public class Index : AbpPageModel
    {
        [BindProperty] public UploadFileDto UploadFileDto { get; set; }

        private readonly IFileAppService _fileAppService;

        public bool Uploaded { get; set; } = false;

        public Index(IFileAppService fileAppService)
        {
            _fileAppService = fileAppService;
        }

        public void OnGet()
        {
        }

        public async Task<IActionResult> OnPostAsync()
        {
            using (var memoryStream = new MemoryStream())
            {
                await UploadFileDto.File.CopyToAsync(memoryStream);

                await _fileAppService.SaveBlobAsync(
                    new SaveBlobInputDto
                    {
                        Name = UploadFileDto.Name,
                        Content = memoryStream.ToArray()
                    }
                );
            }

            return Page();
        }
    }

    public class UploadFileDto
    {
        [Required] 
        [Display(Name = "File")] 
        public IFormFile File { get; set; }

        [Required]
        [Display(Name = "Filename")]
        public string Name { get; set; }
    }
}