# ModularCrm

> This is the source code of the application that is built with the [Modular Monolith Application tutorial](https://abp.io/docs/latest/tutorials/modular-crm). Read the tutorial to understand the application.

## Pre-Requirements

* [.NET8.0+ SDK](https://dotnet.microsoft.com/download/dotnet)
* [Node v18 or 20](https://nodejs.org/en)

## Before Running the Application

If you've cloned this repository first time, please follow the steps in the next sections.

### Graph Build the Solution

This is a modular solution, so it has some sub-solutions. You should make a graph build to ensure that all modules and the main solution are properly built. Run the following command in the root folder of the solution:

````bash
dotnet build /graphBuild
````

### Install Client-Side Libraries

Run `abp install-libs` terminal command in your solution's directory to install client-side package dependencies. This step is automatically done when you create a new solution with ABP CLI. However, you should run it yourself if you have first cloned this solution from your source control, or added a new client-side package dependency to your solution.

### Create & Seed the Database

Run `ModularCrm.DbMigrator` to create the initial database. This should be done in the first run. It is also needed if a new database migration is added to the solution later.

### Generating a Signing Certificate

In the production environment, you need to use a production signing certificate. ABP Framework sets up signing and encryption certificates in your application and expects an `authserver.pfx` file in your application.

To generate a signing certificate, you can use the following command:

```bash
dotnet dev-certs https -v -ep authserver.pfx -p 00000000-0000-0000-0000-000000000000
```

> `00000000-0000-0000-0000-000000000000` is the password of the certificate, you can change it to any GUID value you want

It is recommended to use **two** RSA certificates, distinct from the certificate(s) used for HTTPS: one for encryption, one for signing.

For more information, please refer to: https://documentation.openiddict.com/configuration/encryption-and-signing-credentials.html#registering-a-certificate-recommended-for-production-ready-scenarios

> Also, see the [Configuring OpenIddict](https://abp.io/docs/latest/deployment/configuring-openIddict#production-environment) documentation for more information.

## Running the Application

You can open the solution in your IDE and run the `ModularCrm.Web` application.
