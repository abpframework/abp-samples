$a = $args[0]

# COMMON PATHS

$rootFolder = (Get-Item -Path "./" -Verbose).FullName

# List of solutions

if ($a -eq "-a")
{
    $solutionPaths = (
        "../AcmeBookStoreAngularMaterial/aspnet-core",
        "../Authentication-Customization",
        "../BasicAspNetCoreApplication",
        "../BookStore-Angular-MongoDb/aspnet-core",
        "../BookStore-Blazor-EfCore",
        "../BookStore-Modular/modules/book-management",
        "../BookStore-Modular/application",
        "../BookStore-Mvc-EfCore",
        "../ClientSimulationDemo",
        "../CosmosDBSample",
        "../CustomAngularAppWithIdentityServer/aspnet-core",
        "../DashboardDemo",
        # "../DevExpress-Blazor",
        # "../DevExtreme-Angular/aspnet-core",
        # "../DevExtreme-Mvc",
        "../DocumentationSamples/CustomApplicationModules",
        "../DocumentationSamples/ExtendLocalizationResource",
        "../DomainTenantResolver/MVC",
        "../DomainTenantResolver/MVC-TIERED",
        "../DomainTenantResolver/NG/aspnet-core",
        "../EfCoreMigrationDemo",
        "../EventOrganizer",
        "../GrpcDemo",
        "../MatBlazorSample"
        #"../MicroserviceDemo",
    )
}
else 
{
    $solutionPaths = (
        "../OrganizationUnitSample",
        "../PasswordlessAuthentication",
        "../PostgeSqlDemo",
        "../PrimengSample/aspnet-core",
        "../SignalRDemo",
        "../SignalRTieredDemo",
        "../SingleLayer",
        "../StoredProcedureDemo",
        "../SyncfusionSample",
        "../TextTemplateDemo/Razor",
        "../TextTemplateDemo/Scriban",
        "../AbpLdapSample",
        "../MiniProfiler",
        "../MiniProfiler-Tiered",
        "../ExcelIO",
        "../EmailSendDemo",
        "../IdentityServerReferenceToken/aspnet-core",
        "../SignInWithoutSpecifyingTenant/IdentityServer",
        "../SignInWithoutSpecifyingTenant/OpenIddict",
        "../UnifiedEfCoreMigrations"
    )
}
