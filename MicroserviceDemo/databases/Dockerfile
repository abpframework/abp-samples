FROM mcr.microsoft.com/dotnet/core/sdk:3.1-buster AS build
#RUN apk add --no-cache bash
ENV PATH $PATH:/root/.dotnet/tools
RUN dotnet tool install -g dotnet-ef
WORKDIR /src
COPY . .

WORKDIR "/src/microservices/ProductService.Host"
RUN dotnet restore "ProductService.Host.csproj" -nowarn:msb3202,nu1503
RUN dotnet build --no-restore -c Release

WORKDIR "/src/applications/AuthServer.Host"
RUN dotnet restore "AuthServer.Host.csproj" -nowarn:msb3202,nu1503
RUN dotnet build --no-restore -c Release

FROM build AS final
WORKDIR /src
COPY --from=build /src/microservices/ProductService.Host ./ProductService.Host
COPY --from=build /src/applications/AuthServer.Host ./AuthServer.Host
COPY --from=build /src/databases/entrypoint.sh .
RUN /bin/bash -c "sed -i $'s/\r$//' entrypoint.sh"
RUN chmod +x ./entrypoint.sh

ENTRYPOINT ["./entrypoint.sh"]
