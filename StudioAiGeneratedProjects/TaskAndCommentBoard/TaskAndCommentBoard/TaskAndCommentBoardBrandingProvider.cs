using Microsoft.Extensions.Localization;
using TaskAndCommentBoard.Localization;
using Volo.Abp.DependencyInjection;
using Volo.Abp.Ui.Branding;

namespace TaskAndCommentBoard;

[Dependency(ReplaceServices = true)]
public class TaskAndCommentBoardBrandingProvider : DefaultBrandingProvider
{
    private IStringLocalizer<TaskAndCommentBoardResource> _localizer;

    public TaskAndCommentBoardBrandingProvider(IStringLocalizer<TaskAndCommentBoardResource> localizer)
    {
        _localizer = localizer;
    }

    public override string AppName => _localizer["AppName"];
}