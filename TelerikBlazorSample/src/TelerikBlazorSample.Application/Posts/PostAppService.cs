using System.Collections.Generic;
using System.Net.Http;
using System.Text;
using System.Text.Json;
using System.Threading.Tasks;
using Volo.Abp.Application.Services;

namespace TelerikBlazorSample.Posts
{
    // The service use JSON api to get sample posts. You may want to replace this service with code that perform DB calls.
    public class PostAppService : ApplicationService, IPostAppService
    {
        private JsonSerializerOptions _options = new JsonSerializerOptions
        {
            IncludeFields = true,
            PropertyNameCaseInsensitive = true
        };

        public async Task<List<Post>> GetPostsAsync()
        {
            var url = "https://jsonplaceholder.typicode.com/posts";
            List<Post> _posts = new List<Post>();

            using (var client = new HttpClient())
            {
                var result = await client.GetAsync(url);

                if (result.IsSuccessStatusCode)
                {
                    var content = await result.Content.ReadAsStringAsync();
                    var deserializedPosts = JsonSerializer.Deserialize<List<Post>>(content, _options);

                    _posts = deserializedPosts;
                }
            }

            return _posts;
        }

        public async Task<Post> AddPostAsync(Post post)
        {
            var url = "https://jsonplaceholder.typicode.com/posts";
            Post addedPost = null;

            using (var client = new HttpClient())
            {
                var serializePost = JsonSerializer.Serialize(post);
                var content = new StringContent(serializePost, Encoding.UTF8, "application/json");
                var result = await client.PostAsync(url, content);

                if (result.IsSuccessStatusCode)
                {
                    var response = await result.Content.ReadAsStringAsync();
                    addedPost = JsonSerializer.Deserialize<Post>(response);
                }
            }

            return addedPost;
        }

        public async Task<Post> UpdatePostAsync(int postId, Post post)
        {
            var url = $"https://jsonplaceholder.typicode.com/posts/{postId}";
            Post updatedPost = null;

            using (var client = new HttpClient())
            {
                var serializePost = JsonSerializer.Serialize(post);
                var content = new StringContent(serializePost, Encoding.UTF8, "application/json");
                var result = await client.PutAsync(url, content);

                if (result.IsSuccessStatusCode)
                {
                    var response = await result.Content.ReadAsStringAsync();
                    updatedPost = JsonSerializer.Deserialize<Post>(response);
                }
            }

            return updatedPost;
        }

        public async Task DeletePostAsync(int postId)
        {
            var url = $"https://jsonplaceholder.typicode.com/posts/{postId}";

            using (var client = new HttpClient())
            {
                await client.DeleteAsync(url);
            }
        }

        public async Task<Comment> GetFirstCommentByPostIdAsync(int postId)
        {
            var url = $"https://jsonplaceholder.typicode.com/posts/{postId}/comments";

            List<Comment> _comments = new List<Comment>();

            using (var client = new HttpClient())
            {
                var result = await client.GetAsync(url);

                if (result.IsSuccessStatusCode)
                {
                    var content = await result.Content.ReadAsStringAsync();
                    var deserializedPosts = JsonSerializer.Deserialize<List<Comment>>(content, _options);

                    _comments = deserializedPosts;
                }
            }

            return _comments[0];
        }
    }
}
