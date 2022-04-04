using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using JetBrains.Annotations;
using Localization.Resources.AbpUi;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Components;
using Microsoft.Extensions.Localization;
using MudBlazor;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;
using Volo.Abp.Authorization;
using Volo.Abp.BlazoriseUI.Components;
using Volo.Abp.AspNetCore.Components.Web.Extensibility.EntityActions;
using Volo.Abp.AspNetCore.Components.Web.Extensibility.TableColumns;

namespace Volo.Abp.AspNetCore.Components.Web.BasicTheme.Components;

public abstract class MudCrudPageBase<
        TAppService,
        TEntityDto,
        TKey>
    : MudCrudPageBase<
        TAppService,
        TEntityDto,
        TKey,
        PagedAndSortedResultRequestDto>
    where TAppService : ICrudAppService<
        TEntityDto,
        TKey>
    where TEntityDto : class, IEntityDto<TKey>, new()
{
}

public abstract class MudCrudPageBase<
        TAppService,
        TEntityDto,
        TKey,
        TGetListInput>
    : MudCrudPageBase<
        TAppService,
        TEntityDto,
        TKey,
        TGetListInput,
        TEntityDto>
    where TAppService : ICrudAppService<
        TEntityDto,
        TKey,
        TGetListInput>
    where TEntityDto : class, IEntityDto<TKey>, new()
    where TGetListInput : new()
{
}

public abstract class MudCrudPageBase<
        TAppService,
        TEntityDto,
        TKey,
        TGetListInput,
        TCreateInput>
    : MudCrudPageBase<
        TAppService,
        TEntityDto,
        TKey,
        TGetListInput,
        TCreateInput,
        TCreateInput>
    where TAppService : ICrudAppService<
        TEntityDto,
        TKey,
        TGetListInput,
        TCreateInput>
    where TEntityDto : IEntityDto<TKey>
    where TCreateInput : class, new()
    where TGetListInput : new()
{
}

public abstract class MudCrudPageBase<
        TAppService,
        TEntityDto,
        TKey,
        TGetListInput,
        TCreateInput,
        TUpdateInput>
    : MudCrudPageBase<
        TAppService,
        TEntityDto,
        TEntityDto,
        TKey,
        TGetListInput,
        TCreateInput,
        TUpdateInput>
    where TAppService : ICrudAppService<
        TEntityDto,
        TKey,
        TGetListInput,
        TCreateInput,
        TUpdateInput>
    where TEntityDto : IEntityDto<TKey>
    where TCreateInput : class, new()
    where TUpdateInput : class, new()
    where TGetListInput : new()
{
}

public abstract class MudCrudPageBase<
        TAppService,
        TGetOutputDto,
        TGetListOutputDto,
        TKey,
        TGetListInput,
        TCreateInput,
        TUpdateInput>
    : MudCrudPageBase<
        TAppService,
        TGetOutputDto,
        TGetListOutputDto,
        TKey,
        TGetListInput,
        TCreateInput,
        TUpdateInput,
        TGetListOutputDto,
        TCreateInput,
        TUpdateInput>
    where TAppService : ICrudAppService<
        TGetOutputDto,
        TGetListOutputDto,
        TKey,
        TGetListInput,
        TCreateInput,
        TUpdateInput>
    where TGetOutputDto : IEntityDto<TKey>
    where TGetListOutputDto : IEntityDto<TKey>
    where TCreateInput : class, new()
    where TUpdateInput : class, new()
    where TGetListInput : new()
{
}

public abstract class MudCrudPageBase<
        TAppService,
        TGetOutputDto,
        TGetListOutputDto,
        TKey,
        TGetListInput,
        TCreateInput,
        TUpdateInput,
        TListViewModel,
        TCreateViewModel,
        TUpdateViewModel>
    : AbpComponentBase
    where TAppService : ICrudAppService<
        TGetOutputDto,
        TGetListOutputDto,
        TKey,
        TGetListInput,
        TCreateInput,
        TUpdateInput>
    where TGetOutputDto : IEntityDto<TKey>
    where TGetListOutputDto : IEntityDto<TKey>
    where TCreateInput : class
    where TUpdateInput : class
    where TGetListInput : new()
    where TListViewModel : IEntityDto<TKey>
    where TCreateViewModel : class, new()
    where TUpdateViewModel : class, new()
{
    [Inject] protected TAppService AppService { get; set; }
    [Inject] protected IStringLocalizer<AbpUiResource> UiLocalizer { get; set; }

    protected virtual int PageSize { get; } = LimitedResultRequestDto.DefaultMaxResultCount;

    protected TGetListInput GetListInput = new();
    protected TCreateViewModel NewEntity;
    protected TKey EditingEntityId;
    protected TUpdateViewModel EditingEntity;

    protected MudDataGrid<TListViewModel> DataGrid;

    protected bool CreateDialogVisible;
    protected bool EditDialogVisible;

    protected MudForm CreateForm;
    protected MudForm EditForm;

    protected DataGridEntityActionsColumn<TListViewModel> EntityActionsColumn;
    protected EntityActionDictionary EntityActions { get; set; }
    protected TableColumnDictionary TableColumns { get; set; }

    protected string CreatePolicyName { get; set; }
    protected string UpdatePolicyName { get; set; }
    protected string DeletePolicyName { get; set; }

    public bool HasCreatePermission { get; set; }
    public bool HasUpdatePermission { get; set; }
    public bool HasDeletePermission { get; set; }

    protected DialogOptions DialogOptions
    {
        get => new()
        {
            CloseButton = true,
            CloseOnEscapeKey = true,
            DisableBackdropClick = true
        };
    }

    protected MudCrudPageBase()
    {
        NewEntity = new TCreateViewModel();
        EditingEntity = new TUpdateViewModel();
        TableColumns = new TableColumnDictionary();
        EntityActions = new EntityActionDictionary();
    }

    protected async override Task OnInitializedAsync()
    {
        await SetPermissionsAsync();
        await SetEntityActionsAsync();
        await SetTableColumnsAsync();
        await InvokeAsync(StateHasChanged);
    }

    protected async override Task OnAfterRenderAsync(bool firstRender)
    {
        if (firstRender)
        {
            await base.OnAfterRenderAsync(firstRender);
            await SetToolbarItemsAsync();
            await SetBreadcrumbItemsAsync();
        }
    }

    protected virtual async Task SetPermissionsAsync()
    {
        if (CreatePolicyName != null)
        {
            HasCreatePermission = await AuthorizationService.IsGrantedAsync(CreatePolicyName);
        }

        if (UpdatePolicyName != null)
        {
            HasUpdatePermission = await AuthorizationService.IsGrantedAsync(UpdatePolicyName);
        }

        if (DeletePolicyName != null)
        {
            HasDeletePermission = await AuthorizationService.IsGrantedAsync(DeletePolicyName);
        }
    }

    private IReadOnlyList<TListViewModel> MapToListViewModel(IReadOnlyList<TGetListOutputDto> dtos)
    {
        if (typeof(TGetListOutputDto) == typeof(TListViewModel))
        {
            return dtos.As<IReadOnlyList<TListViewModel>>();
        }

        return ObjectMapper.Map<IReadOnlyList<TGetListOutputDto>, List<TListViewModel>>(dtos);
    }

    protected async Task<GridData<TListViewModel>> LoadServerData(GridState<TListViewModel> state)
    {
        if (GetListInput is PagedAndSortedResultRequestDto pageResultRequest)
        {
            pageResultRequest.MaxResultCount = state.PageSize;
            pageResultRequest.SkipCount = state.Page * state.PageSize;
        }
        var result = await AppService.GetListAsync(GetListInput);
        return new()
        {
            Items = MapToListViewModel(result.Items),
            TotalItems = (int)result.TotalCount
        };
    }

    protected virtual async Task OpenCreateModalAsync()
    {
        try
        {
            await CheckCreatePolicyAsync();

            NewEntity = new TCreateViewModel();

            // Mapper will not notify Blazor that binded values are changed
            // so we need to notify it manually by calling StateHasChanged
            await InvokeAsync(() =>
            {
                StateHasChanged();
                CreateDialogVisible = true;
            });
        }
        catch (Exception ex)
        {
            await HandleErrorAsync(ex);
        }
    }

    protected virtual Task CloseCreateModalAsync()
    {
        NewEntity = new TCreateViewModel();
        return InvokeAsync(() => { CreateDialogVisible = false; });
    }

    protected virtual async Task OpenEditModalAsync(TListViewModel entity)
    {
        try
        {
            await CheckUpdatePolicyAsync();

            var entityDto = await AppService.GetAsync(entity.Id);

            EditingEntityId = entity.Id;
            EditingEntity = MapToEditingEntity(entityDto);

            await InvokeAsync(() =>
            {
                StateHasChanged();
                EditDialogVisible = true;
            });
        }
        catch (Exception ex)
        {
            await HandleErrorAsync(ex);
        }
    }

    protected virtual TUpdateViewModel MapToEditingEntity(TGetOutputDto entityDto)
    {
        return ObjectMapper.Map<TGetOutputDto, TUpdateViewModel>(entityDto);
    }

    protected virtual TCreateInput MapToCreateInput(TCreateViewModel createViewModel)
    {
        if (typeof(TCreateInput) == typeof(TCreateViewModel))
        {
            return createViewModel.As<TCreateInput>();
        }

        return ObjectMapper.Map<TCreateViewModel, TCreateInput>(createViewModel);
    }

    protected virtual TUpdateInput MapToUpdateInput(TUpdateViewModel updateViewModel)
    {
        if (typeof(TUpdateInput) == typeof(TUpdateViewModel))
        {
            return updateViewModel.As<TUpdateInput>();
        }

        return ObjectMapper.Map<TUpdateViewModel, TUpdateInput>(updateViewModel);
    }

    protected virtual Task CloseEditModalAsync()
    {
        InvokeAsync(() => { EditDialogVisible = false; });
        return Task.CompletedTask;
    }

    protected virtual async Task CreateEntityAsync()
    {
        try
        {
            var validate = true;
            if (CreateForm is not null)
            {
                validate = CreateForm.IsValid;
            }
            if (validate)
            {
                await OnCreatingEntityAsync();

                await CheckCreatePolicyAsync();
                var createInput = MapToCreateInput(NewEntity);
                await AppService.CreateAsync(createInput);

                await OnCreatedEntityAsync();
            }
        }
        catch (Exception ex)
        {
            await HandleErrorAsync(ex);
        }
    }

    protected virtual Task OnCreatingEntityAsync()
    {
        return Task.CompletedTask;
    }

    protected virtual async Task OnCreatedEntityAsync()
    {
        NewEntity = new TCreateViewModel();
        await DataGrid.ReloadServerData();

        await InvokeAsync(() => { CreateDialogVisible = false; });
    }

    protected virtual async Task UpdateEntityAsync()
    {
        try
        {
            var validate = true;
            if (EditForm is not null)
            {
                validate = EditForm.IsValid;
            }
            if (validate)
            {
                await OnUpdatingEntityAsync();

                await CheckUpdatePolicyAsync();
                var updateInput = MapToUpdateInput(EditingEntity);
                await AppService.UpdateAsync(EditingEntityId, updateInput);

                await OnUpdatedEntityAsync();
            }
        }
        catch (Exception ex)
        {
            await HandleErrorAsync(ex);
        }
    }

    protected virtual Task OnUpdatingEntityAsync()
    {
        return Task.CompletedTask;
    }

    protected virtual async Task OnUpdatedEntityAsync()
    {
        await DataGrid.ReloadServerData();

        await InvokeAsync(() => { EditDialogVisible = false; });
    }

    protected virtual async Task DeleteEntityAsync(TListViewModel entity)
    {
        try
        {
            await CheckDeletePolicyAsync();
            await OnDeletingEntityAsync();
            await AppService.DeleteAsync(entity.Id);
            await OnDeletedEntityAsync();
        }
        catch (Exception ex)
        {
            await HandleErrorAsync(ex);
        }
    }

    protected virtual Task OnDeletingEntityAsync()
    {
        return Task.CompletedTask;
    }

    protected virtual async Task OnDeletedEntityAsync()
    {
        await DataGrid.ReloadServerData();
        await InvokeAsync(StateHasChanged);
        await Notify.Success(L["SuccessfullyDeleted"]);
    }

    protected virtual string GetDeleteConfirmationMessage(TListViewModel entity)
    {
        return UiLocalizer["ItemWillBeDeletedMessage"];
    }

    protected virtual async Task CheckCreatePolicyAsync()
    {
        await CheckPolicyAsync(CreatePolicyName);
    }

    protected virtual async Task CheckUpdatePolicyAsync()
    {
        await CheckPolicyAsync(UpdatePolicyName);
    }

    protected virtual async Task CheckDeletePolicyAsync()
    {
        await CheckPolicyAsync(DeletePolicyName);
    }

    /// <summary>
    /// Calls IAuthorizationService.CheckAsync for the given <paramref name="policyName"/>.
    /// Throws <see cref="AbpAuthorizationException"/> if given policy was not granted for the current user.
    ///
    /// Does nothing if <paramref name="policyName"/> is null or empty.
    /// </summary>
    /// <param name="policyName">A policy name to check</param>
    protected virtual async Task CheckPolicyAsync([CanBeNull] string policyName)
    {
        if (string.IsNullOrEmpty(policyName))
        {
            return;
        }

        await AuthorizationService.CheckAsync(policyName);
    }

    protected virtual ValueTask SetBreadcrumbItemsAsync()
    {
        return ValueTask.CompletedTask;
    }

    protected virtual ValueTask SetEntityActionsAsync()
    {
        return ValueTask.CompletedTask;
    }

    protected virtual ValueTask SetTableColumnsAsync()
    {
        return ValueTask.CompletedTask;
    }

    protected virtual ValueTask SetToolbarItemsAsync()
    {
        return ValueTask.CompletedTask;
    }
}