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
    Set-Location (Join-Path $using:scriptRoot "../../src/BookReviewTracker4.DbMigrator")
    dotnet run
    dotnet run

    if ($LASTEXITCODE -ne 0) {
        throw "dotnet run (DbMigrator) exited with code $LASTEXITCODE"
    }
}

$jobs += Start-Job -Name "DevCert" -ScriptBlock {
    $ErrorActionPreference = "Stop"
    Set-Location (Join-Path $using:scriptRoot "../../src/BookReviewTracker4.Web")
    dotnet dev-certs https -v -ep openiddict.pfx -p b2b3999f-1311-43a5-954f-e25bbe3116bc

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