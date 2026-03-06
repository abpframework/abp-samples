using ModularCrm.Catalog.Tests;
using Microsoft.AspNetCore.Builder;
using Volo.Abp.AspNetCore.TestBase;

var builder = WebApplication.CreateBuilder();
builder.Environment.ContentRootPath = GetWebProjectContentRootPathHelper.Get("ModularCrm.Catalog.csproj"); 
await builder.RunAbpModuleAsync<CatalogTestsModule>(applicationName: "ModularCrm.Catalog");

public partial class TestProgram
{
}
