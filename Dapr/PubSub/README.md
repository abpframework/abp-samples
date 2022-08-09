
## Start Redis

```cs
docker run -d --name dapr-sub-pub -p 6973:6379 redis
```

## Start subscribe website

```cs
dapr run --app-id dapr-subscribe --components-path dapr/components/ --app-port 7001 --dapr-http-port 7002 --dapr-grpc-port 7003 -- dotnet run --project DaprSubscribe\DaprSubscribe.csproj 
```

## Start publisher app
```cs
dapr run --app-id dapr-publisher --components-path dapr/components/ --dapr-http-port 8002 --dapr-grpc-port 8003 -- dotnet run --project DaprPublisher\DaprPublisher.csproj 
```
