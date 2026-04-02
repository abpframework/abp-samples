param ($version='latest')

$currentFolder = $PSScriptRoot
$slnFolder = Join-Path $currentFolder "../../"
$appFolder = Join-Path $slnFolder "TravelPlanner"


Write-Host "********* BUILDING Application *********" -ForegroundColor Green

$hostFolder = Join-Path $slnFolder "TravelPlanner.Host"
Set-Location $hostFolder
dotnet publish -c Release
docker build -f Dockerfile.local -t travelplanner:$version .

### ALL COMPLETED
Write-Host "********* COMPLETED *********" -ForegroundColor Green
Set-Location $currentFolder
exit $LASTEXITCODE