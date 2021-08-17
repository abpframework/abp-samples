using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Http;

namespace FileActionsDemo.Models
{
    public class UploadFileViewModel
    {
        [Required]
        [Display(Name = "File")]
        public IFormFile File { get; set; }
        
        [Required]
        [Display(Name = "Filename")]
        public string Name { get; set; }
    }
}