using Asp.Versioning;
using Asp.Versioning.ApiExplorer;
using Asp.Versioning.ApplicationModels;
using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using BookStore.Swagger;
using BookStore.Web;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.ApiExplorer;
using Microsoft.Extensions.Options;
using Swashbuckle.AspNetCore.SwaggerGen;
using Volo.Abp;
using Volo.Abp.AspNetCore.Mvc;
using Volo.Abp.AspNetCore.Mvc.UI.Theme.Basic;
using Volo.Abp.AspNetCore.Mvc.UI.Theme.Shared;
using Volo.Abp.Autofac;
using Volo.Abp.Modularity;
using Volo.Abp.Swashbuckle;

namespace BookStore;

[DependsOn(
    typeof(BookStoreWebModule),
    typeof(BookStoreApplicationModule),
    typeof(BookStoreHttpApiModule),
    typeof(AbpAutofacModule),
    typeof(AbpAspNetCoreMvcUiBasicThemeModule),
    typeof(AbpSwashbuckleModule)
    )]
public class BookStoreWebAppModule : AbpModule
{
    public override void PreConfigureServices(ServiceConfigurationContext context)
    {
        PreConfigure<AbpAspNetCoreMvcOptions>(options =>
        {
            //2.0 Version
            options.ConventionalControllers.Create(typeof(BookStoreWebAppModule).Assembly, opts =>
            {
                opts.TypePredicate = t => t.Namespace == typeof(BookStore.Controllers.ConventionalControllers.v2.TodoAppService).Namespace;
                opts.ApiVersions.Add(new ApiVersion(2, 0));
            });

            //1.0 Compatibility version
            options.ConventionalControllers.Create(typeof(BookStoreWebAppModule).Assembly, opts =>
            {
                opts.TypePredicate = t => t.Namespace == typeof(BookStore.Controllers.ConventionalControllers.v1.TodoAppService).Namespace;
                opts.ApiVersions.Add(new ApiVersion(1, 0));
            });
        });
    }

    public override void ConfigureServices(ServiceConfigurationContext context)
    {
        var preActions = context.Services.GetPreConfigureActions<AbpAspNetCoreMvcOptions>();
        Configure<AbpAspNetCoreMvcOptions>(options =>
        {
            preActions.Configure(options);
        });

        // Show neutral/versionless APIs.
        context.Services.AddTransient<IApiControllerFilter, NoControllerFilter>();
        context.Services.AddAbpApiVersioning(options =>
        {
            options.ReportApiVersions = true;
            options.AssumeDefaultVersionWhenUnspecified = true;

            //options.ApiVersionReader = new HeaderApiVersionReader("api-version"); //Supports header too
            //options.ApiVersionReader = new MediaTypeApiVersionReader(); //Supports accept header too
        }, options =>
        {
            options.ConfigureAbp(preActions.Configure());
        })
        .AddApiExplorer(options => {
              // add the versioned api explorer, which also adds IApiVersionDescriptionProvider service
              // note: the specified format code will format the version as "'v'major[.minor][-status]"
              options.GroupNameFormat = "'v'VVV";

              // note: this option is only necessary when versioning by url segment. the SubstitutionFormat
              // can also be used to control the format of the API version in route templates
              options.SubstituteApiVersionInUrl = true;
          });

        context.Services.AddTransient<IConfigureOptions<SwaggerGenOptions>, ConfigureSwaggerOptions>();

        context.Services.AddSwaggerGen(
            options =>
            {
                // add a custom operation filter which sets default values
                options.OperationFilter<SwaggerDefaultValues>();

                options.CustomSchemaIds(type => type.FullName);
            });

        Configure<AbpAspNetCoreMvcOptions>(options =>
        {
            options.ChangeControllerModelApiExplorerGroupName = false;
        });
    }

    public override void OnApplicationInitialization(ApplicationInitializationContext context)
    {
        var app = context.GetApplicationBuilder();
        var env = context.GetEnvironment();

        if (env.IsDevelopment())
        {
            app.UseDeveloperExceptionPage();
        }
        else
        {
            app.UseErrorPage();
            app.UseHsts();
        }

        app.UseHttpsRedirection();
        app.UseStaticFiles();
        app.UseRouting();
        app.UseAbpRequestLocalization();

        app.UseSwagger();
        app.UseSwaggerUI(
            options =>
            {
                var provider = app.ApplicationServices.GetRequiredService<IApiVersionDescriptionProvider>();
                // build a swagger endpoint for each discovered API version
                foreach (var description in provider.ApiVersionDescriptions)
                {
                    options.SwaggerEndpoint($"/swagger/{description.GroupName}/swagger.json", description.GroupName.ToUpperInvariant());
                }
            });

        app.UseConfiguredEndpoints();
    }
}
