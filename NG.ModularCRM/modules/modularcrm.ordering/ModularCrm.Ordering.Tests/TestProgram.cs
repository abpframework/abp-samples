using ModularCrm.Ordering.Tests;
using Microsoft.AspNetCore.Builder;
using Volo.Abp.AspNetCore.TestBase;

var builder = WebApplication.CreateBuilder();
builder.Environment.ContentRootPath = GetWebProjectContentRootPathHelper.Get("ModularCrm.Ordering.csproj"); 
await builder.RunAbpModuleAsync<OrderingTestsModule>(applicationName: "ModularCrm.Ordering");

public partial class TestProgram
{
}
