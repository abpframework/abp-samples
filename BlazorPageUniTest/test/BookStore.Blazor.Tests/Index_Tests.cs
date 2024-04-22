using Bunit;
using Shouldly;
using Xunit;

namespace BookStore.Blazor.Tests;

public class Index_Tests : BookStoreBlazorTestBase
{
    [Fact]
    public void Index_Test()
    {
        // Arrange
        var ctx = CreateTestContext();

        // Act
        var cut = ctx.RenderComponent<BookStore.Blazor.Pages.Index>();

        // Assert
        cut.Find(".lead").InnerHtml.Contains("Welcome to the application. This is a startup project based on the ABP framework. For more information, visit abp.io.").ShouldBeTrue();
        cut.Find("#username").InnerHtml.Contains("Welcome admin").ShouldBeTrue();
    }
}
