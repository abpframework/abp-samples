# Modular CRM

This is an example project for the Modular Monolith Application Development document. See the documentation:

**https://abp.io/docs/latest/tutorials/modular-crm**

## Pre-requirements

* [.NET9.0+ SDK](https://dotnet.microsoft.com/download/dotnet)
* [Node v18 or 20](https://nodejs.org/en)

## Before running the application

### Generating a Signing Certificate

To generate a sign-in certificate, you can use the following command:

```bash
dotnet dev-certs https -v -ep openiddict.pfx -p ef9ce77d-3959-481b-a41d-e5abf82918ca
```

> `ef9ce77d-3959-481b-a41d-e5abf82918ca` is the password of the certificate, you can change it to any password you want.

### Install Client-Side libraries

Run the following command in the root of your solution directory:

```bash
abp install-libs
```

You may need to install the [ABP CLI](https://abp.io/docs/latest/cli) if you haven't installed it before.

## How to run

The application needs a database. Run the following command in the [ModularCrm](./ModularCrm) project directory to migrate the database and seed the initial data:

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

* [Modular Application Development Tutorial](https://abp.io/docs/latest/tutorials/modular-crm)
* [Application (Single Layer) Startup Template](https://abp.io/docs/latest/startup-templates/application-single-layer/index)