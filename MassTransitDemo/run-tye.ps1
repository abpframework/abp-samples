<# Check development certificates #>

if (! (  Test-Path ".\etc\dev-cert\localhost.pfx" -PathType Leaf ) ){
   Write-Information "Creating dev certificates..."
   cd ".\etc\dev-cert"
   .\create-certificate.ps1
   cd..
   cd ..  
}

<# Check Docker containers #>
docker network create eshoponabp-network

$requiredServices = @(
	'postgres-db',
	'rabbitmq',
	'redis'
)
	
foreach ($requiredService in $requiredServices) {	

    $nameParam = -join("name=", $requiredService)
	$serviceRunningStatus = docker ps --filter $nameParam
	$isDockerImageUp = $serviceRunningStatus -split " " -contains $requiredService
	
	if( $isDockerImageUp )
	{
		Write-Host ($requiredService + " [up]")
	}
	else
	{
	    cd "./etc/docker/"
		docker-compose -f docker-compose.infrastructure.yml -f docker-compose.infrastructure.override.yml up -d
		cd ../..
		break;
	}
}
 

<# Run all services #>

tye run --watch