$a = $args[0] 

. ".\common.ps1" $a

# Test all solutions

foreach ($solutionPath in $solutionPaths) {    
    $solutionAbsPath = (Join-Path $rootFolder $solutionPath)
    Set-Location $solutionAbsPath
    dotnet test --no-build --no-restore
    if (-Not $?) {
        Write-Host ("Test failed for the solution: " + $solutionPath)
        Set-Location $rootFolder
        exit $LASTEXITCODE
    }
}

Set-Location $rootFolder
