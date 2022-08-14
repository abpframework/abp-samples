using System.ComponentModel.DataAnnotations;
using Acme.BookStore.MultiLingualObjects;

namespace Acme.BookStore.Books;

public class AddBookTranslationDto : IObjectTranslation
{
    [Required]
    public string Language { get; set; }
    
    [Required]
    public string Name { get; set; }
}