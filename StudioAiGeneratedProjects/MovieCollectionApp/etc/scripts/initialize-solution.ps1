$scriptRoot = Split-Path -Parent $MyInvocation.MyCommand.Path

$jobs = @()

$jobs += Start-Job -Name "InstallLibs" -ScriptBlock {
    $ErrorActionPreference = "Stop"
    Set-Location (Join-Path $using:scriptRoot "../../")
    abp install-libs

    if ($LASTEXITCODE -ne 0) {
        throw "abp install-libs exited with code $LASTEXITCODE"
    }
}

$jobs += Start-Job -Name "DbMigrator" -ScriptBlock {
    $ErrorActionPreference = "Stop"
    Set-Location (Join-Path $using:scriptRoot "../../src/MovieCollectionApp.DbMigrator")
    dotnet run
    dotnet run

    if ($LASTEXITCODE -ne 0) {
        throw "dotnet run (DbMigrator) exited with code $LASTEXITCODE"
    }
}

$jobs += Start-Job -Name "DevCert" -ScriptBlock {
    $ErrorActionPreference = "Stop"
    Set-Location (Join-Path $using:scriptRoot "../../src/MovieCollectionApp.HttpApi.Host")
    dotnet dev-certs https -v -ep openiddict.pfx -p b43571fb-413d-49af-9003-9dcb95549385

    if ($LASTEXITCODE -ne 0) {
        throw "dotnet dev-certs exited with code $LASTEXITCODE"
    }
}

Wait-Job $jobs | Out-Null
$jobs | Receive-Job

$failed = $jobs | Where-Object { $_.State -eq 'Failed' }
$hasError = $failed.Count -gt 0

if ($hasError) {
    foreach ($job in $failed) {
        [Console]::Error.WriteLine("Job '$($job.Name)' FAILED")
    }

    Remove-Job $jobs | Out-Null
    exit -1
}

Remove-Job $jobs | Out-Null
exit 0