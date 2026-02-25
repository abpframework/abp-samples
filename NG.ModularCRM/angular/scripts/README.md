# Symlink Management Scripts

This directory contains PowerShell scripts for managing symbolic links between package directories in the Lepton project. These scripts help optimize development workflow by creating symlinks to shared dependencies instead of duplicating them across multiple package directories.

You will need to run these scripts if you need to reference an installed package on the main angular application.

## 📁 Files Overview

| File                  | Purpose       | Description                                                                    |
| --------------------- | ------------- | ------------------------------------------------------------------------------ |
| `symlink-config.ps1`  | Configuration | Shared configuration file defining package directories and packages to symlink |
| `setup-symlinks.ps1`  | Setup         | Creates selective symlinks for specific packages across library directories    |
| `remove-symlinks.ps1` | Cleanup       | Removes all symlinked node_modules directories                                 |

## 🚀 Quick Start

### Prerequisites

1. **PowerShell**: Ensure you have PowerShell Core (pwsh) installed
2. **Dependencies**: Run `yarn install` in the main demo app directory first (`ModularCRM/angular`)
3. **Permissions**: On Windows, you may need to run PowerShell as Administrator for symlink creation

### Basic Usage

```powershell
# Navigate to the scripts directory
cd ModularCRM/angular/scripts

# Setup symlinks (run this first)
./setup-symlinks.ps1

# Remove symlinks when done
./remove-symlinks.ps1
```

## 📋 Detailed Script Documentation

### 🔧 symlink-config.ps1

**Purpose**: Centralized configuration for all symlink operations.

**Configuration**:

- **Package Directories**: Defines all library directories that need symlink management
- **Packages to Symlink**: Lists specific npm packages that should be symlinked

**Key Variables**:

- `$script:PackageDirectories`: Array of relative paths to library directories
- `$script:PackagesToSymlink`: Array of package names to symlink

**Functions**:

- `Get-PackageDirectories()`: Returns the list of package directories
- `Get-PackagesToSymlink()`: Returns the list of packages to symlink

### 🔗 setup-symlinks.ps1

**Purpose**: Creates selective symlinks for shared dependencies across library directories.

**What it does**:

1. Reads configuration from `symlink-config.ps1`
2. Identifies the main app's `node_modules` directory
3. For each library directory:
   - Creates a `node_modules` directory if it doesn't exist
   - Creates symlinks for each configured package
   - Skips packages that don't exist in the main `node_modules`
   - Avoids circular symlinks

**Example Output**:

```
🔗 Setting up selective symlinks for specific packages...

📦 Packages to symlink:
   • @angular
   • @abp
   • @volo
   • @volosoft
   • @ngx-validate
   • @swimlane
   • rxjs
   • cropperjs
   • angularx-qrcode
   • qrcode

📁 Processing ./../modules/Volo.Abp.Identity.Pro/angular/projects/account..
   ✅ Linked @angular
   ✅ Linked @abp
   ✅ Linked @volo
   ...

🎉 Symlinks completed! Linked: 45, Skipped: 3
```

### 🗑️ remove-symlinks.ps1

**Purpose**: Removes all symlinked `node_modules` directories to clean up the workspace.

**What it does**:

1. Reads configuration from `symlink-config.ps1`
2. For each library directory:
   - Locates the `node_modules` directory
   - Removes the entire directory (which contains symlinks)
   - Reports success/failure for each operation

**Example Output**:

```
🗑️  Removing symlinks from library directories...

📁 Processing ../../modules/Volo.Abp.Identity.Pro/angular/projects/account...
   ✅ Removed node_modules directory

📁 Processing ./../modules/Volo.Abp.Identity.Pro/angular/projects/account...
   ✅ Removed node_modules directory

🎉 Cleanup completed! Removed: 8, Skipped: 0
💡 Libraries will now use their own local dependencies (if any)
```

## ⚙️ Configuration

### Adding New Package Directories

Edit `symlink-config.ps1` and add new paths to the `$script:PackageDirectories` array:

```powershell
$script:PackageDirectories = @(
   "./../modules/Volo.Abp.Identity.Pro/angular"
    # Add your new directory here
)
```

### Adding New Packages to Symlink

Edit `symlink-config.ps1` and add package names to the `$script:PackagesToSymlink` array:

```powershell
$script:PackagesToSymlink = @(
    "@angular",
    "@abp",
    # Add your new package here
    "your-new-package"
)
```

## 🚨 Troubleshooting

### Common Issues

**Error: "Export-ModuleMember can only be called from inside a module"**

- ✅ **Fixed**: This was resolved by removing the `Export-ModuleMember` line from `symlink-config.ps1`

**Error: "Main app node_modules not found"**

- **Solution**: Run `yarn install` in the main demo app directory first

**Error: "Access denied" on Windows**

- **Solution**: Run PowerShell as Administrator

**Symlinks not working on Windows**

- **Solution**: Enable Developer Mode in Windows Settings, or run as Administrator

### Platform-Specific Notes

**Windows**:

- Uses `cmd /c "mklink /J"` for directory junctions
- May require Administrator privileges
- Consider enabling Developer Mode for easier symlink creation

**macOS/Linux**:

- Uses `New-Item -ItemType SymbolicLink`
- Generally works without special permissions
- May require `ln -s` if PowerShell symlinks don't work

## 📝 Notes

- These scripts are designed for development environments
- Always run `remove-symlinks.ps1` before committing changes
- The scripts use relative paths, so they must be run from the scripts directory
- Symlinks are automatically detected and handled by most development tools
- Consider adding symlinked directories to `.gitignore` if needed

## 🤝 Contributing

When modifying these scripts:

1. Test on both Windows and macOS/Linux
2. Update this README if you change functionality
3. Ensure error handling is robust
4. Maintain backward compatibility with existing configurations
