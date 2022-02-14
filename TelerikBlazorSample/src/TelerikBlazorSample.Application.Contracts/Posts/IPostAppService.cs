using System.Collections.Generic;
using System.Threading.Tasks;
using Volo.Abp.Application.Services;

namespace TelerikBlazorSample.Posts
{
    public interface IPostAppService : IApplicationService
    {
        Task<List<Post>> GetPostsAsync();

        Task<Post> AddPostAsync(Post post);

        Task<Post> UpdatePostAsync(int postId, Post post);

        Task DeletePostAsync(int postId);

        Task<Comment> GetFirstCommentByPostIdAsync(int postId);
    }
}
