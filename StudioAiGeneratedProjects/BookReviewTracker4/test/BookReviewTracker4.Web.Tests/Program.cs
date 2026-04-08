using Microsoft.AspNetCore.Builder;
using BookReviewTracker4;
using Volo.Abp.AspNetCore.TestBase;

var builder = WebApplication.CreateBuilder();
builder.Environment.ContentRootPath = GetWebProjectContentRootPathHelper.Get("BookReviewTracker4.Web.csproj"); 
await builder.RunAbpModuleAsync<BookReviewTracker4WebTestModule>(applicationName: "BookReviewTracker4.Web");

public partial class Program
{
}
