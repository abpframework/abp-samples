using System;

namespace TelerikBlazorSample.Posts
{
    [Serializable]
    public class Post
    {
        public int Id { get; set; }

        public string Title { get; set; }

        public string Body { get; set; }

        public int UserId { get; set; }
    }
}
