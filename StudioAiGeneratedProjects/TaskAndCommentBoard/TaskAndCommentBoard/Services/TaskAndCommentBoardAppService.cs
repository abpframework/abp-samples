using Volo.Abp.Application.Services;
using TaskAndCommentBoard.Localization;

namespace TaskAndCommentBoard.Services;

/* Inherit your application services from this class. */
public abstract class TaskAndCommentBoardAppService : ApplicationService
{
    protected TaskAndCommentBoardAppService()
    {
        LocalizationResource = typeof(TaskAndCommentBoardResource);
    }
}