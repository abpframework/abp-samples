# AbpAiChat

# AI Chat with Custom Data

This project is an AI chat application that demonstrates how to chat with custom data using an AI language model. Please note that this template is currently in an early preview stage. If you have feedback, please take a [brief survey](https://aka.ms/dotnet-chat-templatePreview2-survey).

>[!NOTE]
> Before running this project you need to configure the API keys or endpoints for the providers you have chosen. See below for details specific to your choices.

# Configure the AI Model Provider

To use models hosted by GitHub Models, you will need to create a GitHub personal access token. The token should not have any scopes or permissions. See [Managing your personal access tokens](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens).

Please use your GitHub personal access token in the `appsettings.json` file.

```json
{
    "GitHub": {
        "Token": "YOUR_GITHUB_TOKEN"
    }
}
```

Learn more about [prototyping with AI models using GitHub Models](https://docs.github.com/github-models/prototyping-with-ai-models).

## About this solution

This is a minimalist, non-layered startup solution with the ABP Framework. All the fundamental ABP modules are already installed.

### Pre-requirements

* [.NET9.0+ SDK](https://dotnet.microsoft.com/download/dotnet)
* [Node v18 or 20](https://nodejs.org/en)

## Before running the application

### Generating a Signing Certificate

In the production environment, you need to use a production signing certificate. ABP Framework sets up signing and encryption certificates in your application and expects an `openiddict.pfx` file in your application.

This certificate is already generated when you created the solution, so most of the time you don't need to generate it yourself. However, if you need to generate a certificate, you can use the following command:

```bash
dotnet dev-certs https -v -ep openiddict.pfx -p 07141f48-ab8e-439c-9b9d-fe388fd77535
```

> `07141f48-ab8e-439c-9b9d-fe388fd77535` is the password of the certificate, you can change it to any password you want.

It is recommended to use **two** RSA certificates, distinct from the certificate(s) used for HTTPS: one for encryption, one for signing.

For more information, please refer to: [OpenIddict Certificate Configuration](https://documentation.openiddict.com/configuration/encryption-and-signing-credentials.html#registering-a-certificate-recommended-for-production-ready-scenarios)

> Also, see the [Configuring OpenIddict](https://abp.io/docs/latest/Deployment/Configuring-OpenIddict#production-environment) documentation for more information.

### Install Client-Side libraries

Run the following command in your solution directory. This step is automatically done when you create a new solution, if you didn't especially disabled it. However, you should run it yourself if you have first cloned this solution from your source control, or added a new client-side package dependency to your solution.

```bash
abp install-libs
```

> This command installs all NPM packages for MVC/Razor Pages and Blazor Server UIs and this command is already run by the ABP CLI, so most of the time you don't need to run this command manually.

## How to run

The application needs a database. Run the following command in the [AbpAiChat](./AbpAiChat) project directory to migrate the database and seed the initial data. This step is automatically done when you create a new solution, if you didn't especially disable it.

````bash
dotnet run --migrate-database
````

This command will create and seed the initial database. Then you can run the application with any IDE that supports .NET.

Happy coding..!

## Deploying the application

Deploying an ABP application follows the same process as deploying any .NET or ASP.NET Core application. However, there are important considerations to keep in mind. For detailed guidance, refer to ABP's [deployment documentation](https://abp.io/docs/latest/Deployment/Index).

### How to deploy on Docker

The application provides the related `Dockerfiles` and `docker-compose` file with scripts. You can build the docker images and run them using docker-compose. The necessary database, DbMigrator, and the application will be running on docker with health checks in an isolated docker network.

#### Creating the Docker images

Navigate to [etc/build](./etc/build) folder and run the `build-images-locally.ps1` script. You can examine the script to set **image tag** for your images. It is `latest` by default.

#### Running the Docker images using Docker-Compose

Navigate to [etc/docker](./etc/docker) folder and run the `run-docker.ps1` script. The script will generate developer certificates (if it doesn't exist already) with `dotnet dev-certs` command to use HTTPS. Then, the script runs the provided docker-compose file on detached mode.

> Not: Developer certificate is only valid for **localhost** domain. If you want to deploy to a real DNS in a production environment, use LetsEncrypt or similar tools.

#### Stopping the Docker containers

Navigate to [etc/docker](./etc/docker) folder and run the `stop-docker.ps1` script. The script stops and removes the running containers.

### Additional resources

You can see the following resources to learn more about your solution and the ABP Framework:

* [Application (Single Layer) Startup Template](https://abp.io/docs/latest/startup-templates/application-single-layer/index)
