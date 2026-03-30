$ErrorActionPreference = "Stop"
$scriptRoot = Split-Path -Parent $MyInvocation.MyCommand.Path

function Run-Step {
    param(
        [string] $Name,
        [scriptblock] $Action
    )

    try {
        & $Action

        if ($LASTEXITCODE -ne 0) {
            throw "Step '$Name' exited with code $LASTEXITCODE"
        }
    }
    catch {
        [Console]::Error.WriteLine("Step '$Name' FAILED")
        exit -1
    }
}

Run-Step "InstallLibs" {
    Set-Location (Join-Path $scriptRoot "..\..\")
    abp install-libs
}

Run-Step "DbMigrator" {
    Set-Location (Join-Path $scriptRoot "../../PersonalBudget")
    dotnet run --migrate-database
    dotnet run --migrate-database
}

Run-Step "DevCert" {
    Set-Location (Join-Path $scriptRoot "../../PersonalBudget")
    dotnet dev-certs https -v -ep openiddict.pfx -p 56b27c98-8bf0-40e5-bff0-e45a948f442f
}

exit 0
