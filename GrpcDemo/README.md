# gRPC Integration Demo

This sample solution shows how to add a gRPC service to an ABP Framework based web application and consume it from a console application.

* The sample is **based on the [Microsoft's tutorial](https://docs.microsoft.com/en-us/aspnet/core/tutorials/grpc/grpc-start)**.
* **See [this commit](https://github.com/abpframework/abp-samples/commit/9c62d1abe4809f18e5281b6595eb9a139fb7add3)** for all the changes made to a new application created via ABP CLI.
* The sample application uses ASP.NET Core MVC UI & EF Core, however nothing different for any other kind of UI framework or database provider.

## How to Run?

* Open the solution in the latest Visual Studio, or your favorite IDE.
* Run the `GrpcDemo.DbMigrator` to create the database of the application (set it as the startup project and run with the Ctrl+F5 keys).
* Run the `GrpcDemo.Web` project.
* Run the `GrpcDemo.HttpApi.Client.ConsoleTestApp` project.
* If you see the `Greeting: Hello GreeterClient` message on the console application window, then everything works as expected!