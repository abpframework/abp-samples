using System.ComponentModel.DataAnnotations;

namespace FileActionsDemo.Storage.Dto
{
    public class GetBlobRequestDto
    {
        [Required]
        public string Name { get; set; }
    }
}