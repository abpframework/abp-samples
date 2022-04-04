using System.Linq;
using System.Threading.Tasks;
using MudBlazor;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Identity;
using Volo.Abp.Identity.Blazor.Pages.Identity;

namespace Acme.BookStore.Blazor.Pages.Identity;

public partial class MudUserManagement
{
    private MudForm _createForm;
    private MudForm _editForm;
    private bool _createDialogVisible;
    private bool _editDialogVisible;
    private MudDataGrid<IdentityUserDto> _dataGrid;
    private MudPermissionManagementModal _permissionManagementModal;

    protected async Task<GridData<IdentityUserDto>> LoadServerData(GridState<IdentityUserDto> state)
    {
        if (GetListInput is PagedAndSortedResultRequestDto pageResultRequest)
        {
            pageResultRequest.MaxResultCount = state.PageSize;
            pageResultRequest.SkipCount = state.Page * state.PageSize;
        }
        var result = await AppService.GetListAsync(GetListInput);
        return new()
        {
            Items = result.Items,
            TotalItems = (int)result.TotalCount
        };
    }

    protected override Task OpenCreateModalAsync()
    {
        NewEntity = new() { IsActive = true };
        NewUserRoles = Roles.Select(i => new AssignedRoleViewModel
        {
            Name = i.Name,
            IsAssigned = i.IsDefault
        }).ToArray();
        _createDialogVisible = true;
        return Task.CompletedTask;
    }

    protected override Task CloseCreateModalAsync()
    {
        _createDialogVisible = false;
        return Task.CompletedTask;
    }

    protected override async Task CreateEntityAsync()
    {
        if (_createForm.IsValid)
        {
            var createDto = MapToCreateInput(NewEntity);
            await AppService.CreateAsync(createDto);
            await _dataGrid.ReloadServerData();
            await CloseCreateModalAsync();
        }
    }

    protected override async Task OpenEditModalAsync(IdentityUserDto entity)
    {
        var userRoleNames = (await AppService.GetRolesAsync(entity.Id)).Items.Select(r => r.Name).ToList();
        EditUserRoles = Roles.Select(x => new AssignedRoleViewModel
        {
            Name = x.Name,
            IsAssigned = userRoleNames.Contains(x.Name)
        }).ToArray();
        EditingEntityId = entity.Id;
        EditingEntity = MapToEditingEntity(entity);
        _editDialogVisible = true;
    }

    protected override Task CloseEditModalAsync()
    {
        _editDialogVisible = false;
        return Task.CompletedTask;
    }

    protected override async Task UpdateEntityAsync()
    {
        if (_editForm.IsValid)
        {
            await AppService.UpdateAsync(EditingEntityId, EditingEntity);
            await _dataGrid.ReloadServerData();
            await CloseEditModalAsync();
        }
    }

    protected override async Task DeleteEntityAsync(IdentityUserDto entity)
    {
        if (await Message.Confirm(GetDeleteConfirmationMessage(entity)))
        {
            await base.DeleteEntityAsync(entity);
            await _dataGrid.ReloadServerData();
        }
    }

    protected override Task OnUpdatedEntityAsync()
    {
        return Task.CompletedTask;
    }

    protected virtual async Task OpenPermissionsModalAsync(IdentityUserDto entity)
    {
        await _permissionManagementModal.OpenDialogAsync(
            PermissionProviderName, entity.Id.ToString());
    }

    protected virtual DialogOptions DialogOptions
    {
        get => new()
        {
            CloseButton = true,
            CloseOnEscapeKey = true,
            DisableBackdropClick = true
        };
    }
}