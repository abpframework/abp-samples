# COMMON PATHS

$rootFolder = (Get-Item -Path "./" -Verbose).FullName

# List of solutions

$solutionPaths = (
    "../Authentication-Customization",
    "../BasicAspNetCoreApplication",
    "../BasicConsoleApplication",
    "../BookStore",
    "../BookStore-Angular-MongoDb/aspnet-core",
    "../BookStore-Modular/modules/book-management",
    "../BookStore-Modular/application",
    "../BookStore-Mvc-EfCore",
    "../DashboardDemo",
    "../DocumentationSamples/CustomApplicationModules",
    "../EfCoreMigrationDemo",
    "../GrpcDemo",
    "../MicroserviceDemo",
    "../OrganizationUnitSample",
    "../PostgeSqlDemo",
    "../RabbitMqEventBus",
    "../SignalRDemo",
    "../SignalRTieredDemo",
    "../StoredProcedureDemo",
    "../TextTemplateDemo"
)