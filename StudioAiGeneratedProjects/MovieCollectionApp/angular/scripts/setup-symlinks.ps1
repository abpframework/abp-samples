#!/usr/bin/env pwsh

# Import shared configuration
. "$PSScriptRoot/symlink-config.ps1"

# Get configuration from shared module
$packagesToSymlink = Get-PackagesToSymlink
$packageDirectories = Get-PackageDirectories

# Global variables for interactive mode
$scriptPath = $PSCommandPath

function Setup-SelectiveSymlinks {
    Write-Host "🔗 Setting up selective symlinks for specific packages...`n" -ForegroundColor Cyan

    $mainNodeModules = Resolve-Path "./../node_modules" -ErrorAction SilentlyContinue

    Write-Host "   • $mainNodeModules" -ForegroundColor Gray


    if (-not $mainNodeModules) {
        Write-Host "❌ Main app node_modules not found. Run npm install first." -ForegroundColor Red
        exit 1
    }


    if ($packagesToSymlink.Count -eq 0 -or $packageDirectories.Count -eq 0) {
        Write-Host "✅ You are all set. There are no packages to symlink." -ForegroundColor Green
        exit 1
    }


    Write-Host "📦 Packages to symlink:" -ForegroundColor Yellow
    foreach ($package in $packagesToSymlink) {
        Write-Host "   • $package" -ForegroundColor Gray
    }
    Write-Host ""

    $totalLinked = 0
    $totalSkipped = 0

    foreach ($packageDir in $packageDirectories) {
        $resolvedPath = Resolve-Path $packageDir
        $targetNodeModules = Join-Path $resolvedPath "node_modules"

        Write-Host "📁 Processing $packageDir..." -ForegroundColor Cyan

        # Skip if this is the main node_modules directory (avoid circular symlinks)
        if ($targetNodeModules -eq $mainNodeModules) {
            Write-Host "   ⚠️  Skipping main node_modules directory" -ForegroundColor Yellow
            continue
        }

        # Create node_modules directory if it doesn't exist
        if (-not (Test-Path $targetNodeModules)) {
            New-Item -ItemType Directory -Path $targetNodeModules -Force | Out-Null
            Write-Host "   📁 Created node_modules directory" -ForegroundColor Gray
        }

        foreach ($package in $packagesToSymlink) {
            $sourcePackage = Join-Path $mainNodeModules $package
            $targetPackage = Join-Path $targetNodeModules $package

            # Skip if trying to symlink to the same location (avoid circular symlinks)
            if ($sourcePackage -eq $targetPackage) {
                Write-Host "   ⚠️  Skipping $package (would create circular symlink)" -ForegroundColor Yellow
                $totalSkipped++
                continue
            }

            # Check if source package exists
            if (-not (Test-Path $sourcePackage)) {
                Write-Host "   ⚠️  Package $package not found in main node_modules" -ForegroundColor Yellow
                $totalSkipped++
                continue
            }

            try {
                # Remove existing symlink/folder if it exists
                if (Test-Path $targetPackage) {
                    Remove-Item $targetPackage -Recurse -Force
                }

                # Create symlink for the specific package
                if ($IsWindows) {
                    cmd /c "mklink /J `"$targetPackage`" `"$sourcePackage`""
                } else {
                    New-Item -ItemType SymbolicLink -Path $targetPackage -Target $sourcePackage | Out-Null
                }

                Write-Host "   ✅ Linked $package" -ForegroundColor Green
                $totalLinked++
            }
            catch {
                Write-Host "   ❌ Failed to link $package`: $($_.Exception.Message)" -ForegroundColor Red
                $totalSkipped++
            }
        }
        Write-Host ""
    }

    Write-Host "🎉 Symlinks completed! Linked: $totalLinked, Skipped: $totalSkipped" -ForegroundColor Green
}

# Main execution
Setup-SelectiveSymlinks