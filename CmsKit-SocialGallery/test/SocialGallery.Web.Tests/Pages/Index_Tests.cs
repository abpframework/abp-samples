using System.Threading.Tasks;
using Shouldly;
using Xunit;

namespace SocialGallery.Pages
{
    [Collection(SocialGalleryTestConsts.CollectionDefinitionName)]
    public class Index_Tests : SocialGalleryWebTestBase
    {
        [Fact]
        public async Task Welcome_Page()
        {
            var response = await GetResponseAsStringAsync("/");
            response.ShouldNotBeNull();
        }
    }
}
