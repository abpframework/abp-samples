# COMMON PATHS

$rootFolder = (Get-Item -Path "./" -Verbose).FullName

# List of solutions

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
    "../DashboardDemo",
    # "../DevExpress-Blazor",
    # "../DevExtreme-Angular/aspnet-core",
    # "../DevExtreme-Mvc",
    "../DocumentationSamples/CustomApplicationModules",
    "../DocumentationSamples/ExtendLocalizationResource",
    "../EfCoreMigrationDemo",
    "../EventOrganizer",
    "../GrpcDemo",
    "../KafkaEventBus",
    #"../MicroserviceDemo",
    "../OrganizationUnitSample",
    "../PasswordlessAuthentication",
    "../PostgeSqlDemo",
    "../RabbitMqEventBus",
    "../RebusEventBus",
    "../SignalRDemo",
    "../SignalRTieredDemo",
    "../StoredProcedureDemo",
    "../TextTemplateDemo",
    "../AbpLdapSample"
)
