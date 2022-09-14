
## Start Http Api

```cs
dapr run --app-id dapr-httpapi --app-port 7086 --dapr-http-port 3500 --app-ssl dotnet run --project DaprHttpApi\DaprHttpApi.csproj 
```

## Start client app
```cs
 dapr run --app-id dapr-client --dapr-http-port 3600  dotnet run --project DaprClient\DaprClient.csproj 
```
