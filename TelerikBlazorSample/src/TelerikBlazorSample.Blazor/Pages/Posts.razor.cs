using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Telerik.Blazor.Components;
using TelerikBlazorSample.Posts;

namespace TelerikBlazorSample.Blazor.Pages
{

    public partial class Posts
    {
        private List<Post> GridData { get; set; }
        private TelerikGrid<Post> Grid { get; set; }
        private bool ModalVisible { get; set; } = false;
        private Comment Comment { get; set; }

        public Posts()
        {
            Comment = new Comment();
        }

        protected override async Task OnInitializedAsync()
        {
            await LoadDataAsync();
        }

        private async Task LoadDataAsync()
        {
            GridData = await PostAppService.GetPostsAsync();
        }

        private async Task UpdateHandler(GridCommandEventArgs args)
        {
            var post = (Post)args.Item;

            await PostAppService.UpdatePostAsync(post.Id, post);

            var matchingPost = GridData.FirstOrDefault(x => x.Id == post.Id);

            if (matchingPost != null)
            {
                matchingPost.Body = post.Body;
                matchingPost.Title = post.Title;
            }
        }

        private async Task DeleteHandler(GridCommandEventArgs args)
        {
            var post = (Post)args.Item;

            GridData.Remove(post);
        }

        private async Task CreateHandler(GridCommandEventArgs args)
        {
            var post = (Post)args.Item;

            var addedPost = await PostAppService.AddPostAsync(post);

            GridData.Insert(0, addedPost);
        }

        private async Task PostDetailAsync(GridCommandEventArgs args)
        {
            var post = (Post)args.Item;

            Comment = await PostAppService.GetFirstCommentByPostIdAsync(post.Id);

            ModalVisible = true;
        }
    }
}
