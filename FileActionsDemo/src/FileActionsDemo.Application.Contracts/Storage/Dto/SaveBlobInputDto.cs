using System.ComponentModel.DataAnnotations;

namespace FileActionsDemo.Storage.Dto
{
    public class SaveBlobInputDto
    {
        public byte[] Content { get; set; }

        [Required]
        public string Name { get; set; }
    }
}