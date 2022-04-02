using System.Threading.Tasks;
using MudBlazor;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Identity;

namespace Acme.BookStore.Blazor.Pages.Identity;

public partial class MudRoleManagement
{
    private MudForm _createForm;
    private MudForm _editForm;
    private bool _createDialogVisible;
    private bool _editDialogVisible;
    private MudDataGrid<IdentityRoleDto> _dataGrid;
    private MudPermissionManagementModal _permissionManagementModal;

    protected async Task<GridData<IdentityRoleDto>> LoadServerData(GridState<IdentityRoleDto> state)
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
        NewEntity = new();
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
            _createDialogVisible = false;
        }
    }

    protected override Task OpenEditModalAsync(IdentityRoleDto entity)
    {
        EditingEntityId = entity.Id;
        EditingEntity = MapToEditingEntity(entity);
        _editDialogVisible = true;
        return Task.CompletedTask;
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
            await base.UpdateEntityAsync();
            await _dataGrid.ReloadServerData();
            _editDialogVisible = false;
        }
    }

    protected override async Task DeleteEntityAsync(IdentityRoleDto entity)
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

    protected virtual async Task OpenPermissionsModalAsync(IdentityRoleDto entity)
    {
        await _permissionManagementModal.OpenDialogAsync(PermissionProviderName, entity.Name);
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