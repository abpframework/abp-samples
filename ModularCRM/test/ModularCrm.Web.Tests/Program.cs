using Microsoft.AspNetCore.Builder;
using ModularCrm;
using Volo.Abp.AspNetCore.TestBase;

var builder = WebApplication.CreateBuilder();
await builder.RunAbpModuleAsync<ModularCrmWebTestModule>();

public partial class Program
{
}
