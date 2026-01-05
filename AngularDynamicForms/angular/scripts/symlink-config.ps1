# Symlink Configuration
# Shared configuration for symlink management scripts

# Define the package directories that need symlink management
# example: "../../modules/Volo.Abp.Identity.Pro/angular"
$script:PackageDirectories = @()

# Define packages that should be symlinked
$script:PackagesToSymlink = @(
    "@angular",
    "@abp",
    "@volo",
    "@volosoft",
    "@swimlane",
    "@ngx-validate",
    "@ng-bootstrap",
    "rxjs",
    "cropperjs",
    "angularx-qrcode",
    "qrcode"
)

# Helper function to get package directories
function Get-PackageDirectories {
    return $script:PackageDirectories
}

# Helper function to get packages to symlink
function Get-PackagesToSymlink {
    return $script:PackagesToSymlink
}

# Functions are available when script is dot-sourced