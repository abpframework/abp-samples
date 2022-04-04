using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Components;
using MudBlazor;
using Volo.Abp.AspNetCore.Components.Web.Configuration;
using Volo.Abp.PermissionManagement;
using Volo.Abp.PermissionManagement.Localization;

namespace Acme.BookStore.Blazor.Pages.Identity;

public partial class MudPermissionManagementModal
{
    [Inject] private IPermissionAppService PermissionAppService { get; set; }
    [Inject] private ICurrentApplicationConfigurationCacheResetService CurrentApplicationConfigurationCacheResetService { get; set; }

    private bool _isVisible;

    protected virtual DialogOptions DialogOptions
    {
        get => new()
        {
            CloseButton = true,
            CloseOnEscapeKey = true,
            DisableBackdropClick = true,
            MaxWidth = MaxWidth.Medium
        };
    }

    private string _providerName;
    private string _providerKey;

    private string _entityDisplayName;
    private List<PermissionGroupDto> _groups;

    private readonly List<PermissionGrantInfoDto> _disabledPermissions = new();

    private int _grantedPermissionCount = 0;
    private int _notGrantedPermissionCount = 0;

    private bool GrantAll
    {
        get => _notGrantedPermissionCount == 0;
        set
        {
            if (_groups == null) return;

            _grantedPermissionCount = 0;
            _notGrantedPermissionCount = 0;

            foreach (var permission in _groups.SelectMany(x => x.Permissions))
            {
                if (IsDisabledPermission(permission)) continue;

                permission.IsGranted = value;

                if (value)
                    _grantedPermissionCount++;
                else
                    _notGrantedPermissionCount++;
            }
        }
    }

    public MudPermissionManagementModal()
    {
        LocalizationResource = typeof(AbpPermissionManagementResource);
    }

    public async Task OpenDialogAsync(string providerName, string providerKey, string entityDisplayName = null)
    {
        try
        {
            _providerName = providerName;
            _providerKey = providerKey;

            var result = await PermissionAppService.GetAsync(_providerName, _providerKey);

            _entityDisplayName = entityDisplayName ?? result.EntityDisplayName;
            _groups = result.Groups;

            _grantedPermissionCount = 0;
            _notGrantedPermissionCount = 0;
            foreach (var permission in _groups.SelectMany(x => x.Permissions))
            {
                if (permission.IsGranted && permission.GrantedProviders.All(x => x.ProviderName != _providerName))
                {
                    _disabledPermissions.Add(permission);
                    continue;
                }

                if (permission.IsGranted)
                    _grantedPermissionCount++;
                else
                    _notGrantedPermissionCount++;
            }

            _isVisible = true;
            StateHasChanged();
        }
        catch (Exception e)
        {
            await HandleErrorAsync(e);
        }
    }

    private async Task CloseModalAsync()
    {
        await InvokeAsync(() => { _isVisible = false; });
    }

    private async Task SaveAsync()
    {
        try
        {
            var updateDto = new UpdatePermissionsDto
            {
                Permissions = _groups
                    .SelectMany(g => g.Permissions)
                    .Select(p => new UpdatePermissionDto { IsGranted = p.IsGranted, Name = p.Name })
                    .ToArray()
            };

            await PermissionAppService.UpdateAsync(_providerName, _providerKey, updateDto);

            await CurrentApplicationConfigurationCacheResetService.ResetAsync();

            await CloseModalAsync();
        }
        catch (Exception e)
        {
            await HandleErrorAsync(e);
        }
    }

    private void GroupGrantAllChanged(bool value, PermissionGroupDto permissionGroup)
    {
        foreach (var permission in permissionGroup.Permissions)
        {
            if (!IsDisabledPermission(permission))
                SetPermissionGrant(permission, value);
        }
    }

    private void PermissionChanged(bool value, PermissionGroupDto permissionGroup, PermissionGrantInfoDto permission)
    {
        SetPermissionGrant(permission, value);

        if (value && permission.ParentName != null)
        {
            var parentPermission = GetParentPermission(permissionGroup, permission);

            SetPermissionGrant(parentPermission, true);
        }
        else if (value == false)
        {
            var childPermissions = GetChildPermissions(permissionGroup, permission);

            foreach (var childPermission in childPermissions)
            {
                SetPermissionGrant(childPermission, false);
            }
        }
    }

    private void SetPermissionGrant(PermissionGrantInfoDto permission, bool value)
    {
        if (permission.IsGranted == value) return;

        if (value)
        {
            _grantedPermissionCount++;
            _notGrantedPermissionCount--;
        }
        else
        {
            _grantedPermissionCount--;
            _notGrantedPermissionCount++;
        }

        permission.IsGranted = value;
    }

    private static PermissionGrantInfoDto GetParentPermission(PermissionGroupDto permissionGroup, PermissionGrantInfoDto permission)
    {
        return permissionGroup.Permissions.First(x => x.Name == permission.ParentName);
    }

    private static List<PermissionGrantInfoDto> GetChildPermissions(PermissionGroupDto permissionGroup, PermissionGrantInfoDto permission)
    {
        return permissionGroup.Permissions.Where(x => x.Name.StartsWith(permission.Name)).ToList();
    }

    private bool IsDisabledPermission(PermissionGrantInfoDto permissionGrantInfo)
    {
        return _disabledPermissions.Any(x => x == permissionGrantInfo);
    }

    private string GetShownName(PermissionGrantInfoDto permissionGrantInfo)
    {
        if (!IsDisabledPermission(permissionGrantInfo))
            return permissionGrantInfo.DisplayName;

        return string.Format(
            "{0} ({1})",
            permissionGrantInfo.DisplayName,
            permissionGrantInfo.GrantedProviders
                .Where(p => p.ProviderName != _providerName)
                .Select(p => p.ProviderName)
                .JoinAsString(", ")
        );
    }
}