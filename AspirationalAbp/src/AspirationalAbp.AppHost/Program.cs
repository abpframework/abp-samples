using Microsoft.Extensions.Hosting;

var builder = DistributedApplication.CreateBuilder(args);

var postgres = builder
	.AddPostgres("postgres")
	.AddDatabase("AspirationalAbp");

var redis = builder.AddRedis("redis");

// DbMigrator  
if (builder.Environment.IsDevelopment())
{
	builder
		.AddProject<Projects.AspirationalAbp_DbMigrator>("dbMigrator")
		.WithReference(postgres, "Default")
		.WithReference(redis, "Redis")
		.WithReplicas(1);
}

// AuthServer  
var authServerLaunchProfile = "AspirationalAbp.AuthServer";
builder
	.AddProject<Projects.AspirationalAbp_AuthServer>("authserver", launchProfileName: authServerLaunchProfile)
	.WithExternalHttpEndpoints()
	.WithReference(postgres, "Default")
	.WithReference(redis);

// HttpApi.Host  
var httpApiHostLaunchProfile = "AspirationalAbp.HttpApi.Host";
builder
	.AddProject<Projects.AspirationalAbp_HttpApi_Host>("httpapihost", launchProfileName: httpApiHostLaunchProfile)
	.WithExternalHttpEndpoints()
	.WithReference(postgres, "Default")
	.WithReference(redis);

// Web  
builder
	.AddProject<Projects.AspirationalAbp_Web>("web", "AspirationalAbp.Web")
	.WithReference(redis);

builder.Build().Run();
