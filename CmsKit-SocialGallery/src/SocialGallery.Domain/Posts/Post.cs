using System;
using Volo.Abp.Domain.Entities.Auditing;

namespace SocialGallery.Posts
{
    public class Post : FullAuditedAggregateRoot<Guid>
    {
        public string Description { get; set; }
        public string ImageFileName { get; set; }
        public Guid AuthorId { get; set; }
    }
}
