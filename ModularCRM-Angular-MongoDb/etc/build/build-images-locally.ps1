param ($version='latest')

$currentFolder = $PSScriptRoot
$slnFolder = Join-Path $currentFolder "../../"
$appFolder = Join-Path $slnFolder "ModularCrm"

$angularAppFolder = Join-Path $slnFolder "../angular"

Write-Host "********* BUILDING Angular Application *********" -ForegroundColor Green
Set-Location $angularAppFolder
npx yarn
npm run build:prod
docker build -f Dockerfile.local -t mycompanyname/modularcrm-web:$version .

Write-Host "********* BUILDING Api.Host Application *********" -ForegroundColor Green
Set-Location $appFolder
dotnet publish -c Release
docker build -f Dockerfile.local -t mycompanyname/modularcrm-api:$version .


### ALL COMPLETED
Write-Host "********* COMPLETED *********" -ForegroundColor Green
Set-Location $currentFolder