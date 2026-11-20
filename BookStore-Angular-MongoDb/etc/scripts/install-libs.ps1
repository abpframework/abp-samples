$ErrorActionPreference = 'Stop'

$target = Resolve-Path (Join-Path $PSScriptRoot '../../aspnet-core')
Push-Location $target
try {
    abp install-libs

    if ($LASTEXITCODE -ne 0) {
        throw "abp install-libs exited with code $LASTEXITCODE"
    }
}
finally {
    Pop-Location
}
