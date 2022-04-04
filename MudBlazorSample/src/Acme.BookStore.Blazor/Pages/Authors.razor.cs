using System;
using System.Threading.Tasks;
using Acme.BookStore.Authors;
using Acme.BookStore.Permissions;
using Microsoft.AspNetCore.Authorization;
using MudBlazor;

namespace Acme.BookStore.Blazor.Pages
{
    public partial class Authors
    {
        private async Task<GridData<AuthorDto>> LoadServerData(GridState<AuthorDto> state)
        {
            var input = new GetAuthorListDto
            {
                Filter = "",
                MaxResultCount = state.PageSize,
                SkipCount = state.Page * state.PageSize
            };
            var result = await AuthorAppService.GetListAsync(input);
            return new()
            {
                Items = result.Items,
                TotalItems = (int)result.TotalCount
            };
        }

        private bool CanCreateAuthor { get; set; }
        private bool CanEditAuthor { get; set; }
        private bool CanDeleteAuthor { get; set; }

        private MudDataGrid<AuthorDto> _authorList;

        private CreateAuthorDto NewAuthor { get; set; }

        private bool _createAuthorDialogVisible;
        private bool _editAuthorDialogVisible;

        private MudForm _createForm;
        private MudForm _editForm;

        private Guid EditingAuthorId { get; set; }
        private UpdateAuthorDto EditingAuthor { get; set; }

        public Authors()
        {
            NewAuthor = new CreateAuthorDto();
            EditingAuthor = new UpdateAuthorDto();
        }

        protected override async Task OnInitializedAsync()
        {
            await SetPermissionsAsync();
        }

        private async Task SetPermissionsAsync()
        {
            CanCreateAuthor = await AuthorizationService
                .IsGrantedAsync(BookStorePermissions.Authors.Create);

            CanEditAuthor = await AuthorizationService
                .IsGrantedAsync(BookStorePermissions.Authors.Edit);

            CanDeleteAuthor = await AuthorizationService
                .IsGrantedAsync(BookStorePermissions.Authors.Delete);
        }

        private void OpenCreateAuthorModal()
        {
            NewAuthor = new CreateAuthorDto();
            _createAuthorDialogVisible = true;
        }

        private void CloseCreateAuthorModal()
        {
            _createAuthorDialogVisible = false;
        }

        private void OpenEditAuthorModal(AuthorDto author)
        {
            EditingAuthorId = author.Id;
            EditingAuthor = ObjectMapper.Map<AuthorDto, UpdateAuthorDto>(author);
            _editAuthorDialogVisible = true;
        }

        private async Task DeleteAuthorAsync(AuthorDto author)
        {
            var confirmMessage = L["AuthorDeletionConfirmationMessage", author.Name];
            if (!await Message.Confirm(confirmMessage))
            {
                return;
            }

            await AuthorAppService.DeleteAsync(author.Id);
            await _authorList.ReloadServerData();
        }

        private void CloseEditAuthorModal()
        {
            _editAuthorDialogVisible = false;
        }

        private async Task CreateAuthorAsync()
        {
            if (_createForm.IsValid)
            {
                await AuthorAppService.CreateAsync(NewAuthor);
                _createAuthorDialogVisible = false;
                await _authorList.ReloadServerData();
            }
        }

        private async Task UpdateAuthorAsync()
        {
            if (_editForm.IsValid)
            {
                await AuthorAppService.UpdateAsync(EditingAuthorId, EditingAuthor);
                _editAuthorDialogVisible = false;
                await _authorList.ReloadServerData();
            }
        }
    }
}