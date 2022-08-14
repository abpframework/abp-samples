using System;
using System.Collections.Generic;
using Acme.BookStore.MultiLingualObjects;
using Volo.Abp.Domain.Entities.Auditing;

namespace Acme.BookStore.Books
{
    public class Book : AuditedAggregateRoot<Guid>, IMultiLingualObject<BookTranslation>
    {
        public Guid AuthorId { get; set; }

        public string Name { get; set; }

        public BookType Type { get; set; }

        public DateTime PublishDate { get; set; }

        public float Price { get; set; }
        
        public ICollection<BookTranslation> Translations { get; set; }
    }
}
