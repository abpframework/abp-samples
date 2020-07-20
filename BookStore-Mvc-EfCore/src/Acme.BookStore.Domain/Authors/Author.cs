using System;
using Volo.Abp.Domain.Entities.Auditing;

namespace Acme.BookStore.Authors
{
    public class Author : FullAuditedAggregateRoot<Guid>
    {
        public string Name { get; internal set; }

        public DateTime BirthDate { get; set; }

        public string ShortBio { get; set; }
    }
}
