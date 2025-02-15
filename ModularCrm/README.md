# ModularCrm

This is a minimalist, non-layered startup solution with the ABP Framework. All the fundamental ABP modules are already installed.

### Pre-requirements

* [.NET9.0+ SDK](https://dotnet.microsoft.com/download/dotnet)
* [Node v18 or 20](https://nodejs.org/en)

## Before running the application

### Generating a Signing Certificate

In the production environment, you need to use a production signing certificate. ABP Framework sets up signing and encryption certificates in your application and expects an `openiddict.pfx` file in your application.

This certificate is already generated when you created the solution, so most of the time you don't need to generate it yourself. However, if you need to generate a certificate, you can use the following command:

```bash
dotnet dev-certs https -v -ep openiddict.pfx -p 1339c215-10bd-4425-b82c-add0150d948d
```

> `1339c215-10bd-4425-b82c-add0150d948d` is the password of the certificate, you can change it to any password you want.

It is recommended to use **two** RSA certificates, distinct from the certificate(s) used for HTTPS: one for encryption, one for signing.

For more information, please refer to: [https://documentation.openiddict.com/configuration/encryption-and-signing-credentials.html#registering-a-certificate-recommended-for-production-ready-scenarios](https://documentation.openiddict.com/configuration/encryption-and-signing-credentials.html#registering-a-certificate-recommended-for-production-ready-scenarios)

> Also, see the [Configuring OpenIddict](https://docs.abp.io/en/abp/latest/Deployment/Configuring-OpenIddict#production-environment) documentation for more information.

### Install Client-Side libraries

Run the following command in the directory of your final application. This step is automatically done when you create a new solution, if you didn't especially disabled it. However, you should run it yourself if you have first cloned this solution from your source control, or added a new client-side package dependency to your solution.

```bash
abp install-libs
```

> This command installs all NPM packages for MVC/Razor Pages and Blazor Server UIs and this command is already run by the ABP CLI, so most of the time you don't need to run this command manually.

### Add EF Core Migrations

If you changed the database schema, you need to add a new migration. Run the following command to add a new migration for the db context that you changed.

> Initial just migration name, you can change it to any name you want.

```bash
dotnet ef migrations add Initial --context ModularCrmDbContext --output-dir Migrations/ModularCrm
dotnet ef migrations add Initial --context ProductsDbContext --output-dir Migrations/Products
```

## How to run

The application needs a database. Run the following command in the `ModularCrm` directory to migrate the database and seed the initial data. This step is automatically done when you create a new solution, if you didn't especially disabled it.

````bash
dotnet run --migrate-database
````

This command will create and seed the initial database. Then you can run the application with any IDE that supports .NET.

Happy coding..!

## Deploying the application

Deploying an ABP application is not different than deploying any .NET or ASP.NET Core application. However, there are some topics that you should care about when you are deploying your applications. You can check ABP's [Deployment documentation](https://docs.abp.io/en/abp/latest/Deployment/Index) and ABP Commercial's [Deployment documentation](https://abp.io/docs/latest/startup-templates/application/deployment?UI=MVC&DB=EF&Tiered=No) before deploying your application.

### How to deploy on Docker

The application provides the related *Dockerfiles* and *docker-compose* file with scripts. You can build the docker images and run them using docker-compose. The necessary database, DbMigrator, and the application will be running on docker with health checks in an isolated docker network.

#### Creating the Docker images

Navigate to _etc/build_ folder and run the `build-images-locally.ps1` script. You can examine the script to set **image tag** for your images. It is `latest` by default.

#### Running the Docker images using Docker-Compose

Navigate to _etc/docker_ folder and run the `run-docker.ps1` script. The script will generate developer certificates (if it doesn't exist already) with `dotnet dev-certs` command to use HTTPS. Then, the script runs the provided docker-compose file on detached mode.

> Not: Developer certificate is only valid for **localhost** domain. If you want to deploy to a real DNS in a production environment, use LetsEncrypt or similar tools.

### Additional resources

You can see the following resources to learn more about your solution and the ABP Framework:

* [Application (Single Layer) Startup Template](https://abp.io/docs/latest/startup-templates/application-single-layer/index)
