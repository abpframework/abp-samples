using System;
using System.Threading.Tasks;
using TaskAndCommentBoard.Entities.Books;
using TaskAndCommentBoard.Entities.Tasks;
using Volo.Abp.Data;
using Volo.Abp.DependencyInjection;
using Volo.Abp.Domain.Repositories;

namespace TaskAndCommentBoard.Data;

public class TaskAndCommentBoardDataSeederContributor
    : IDataSeedContributor, ITransientDependency
{
    private readonly IRepository<Book, Guid> _bookRepository;
    private readonly IRepository<TaskItem, Guid> _taskRepository;
    private readonly IRepository<TaskComment, Guid> _commentRepository;

    public TaskAndCommentBoardDataSeederContributor(
        IRepository<Book, Guid> bookRepository,
        IRepository<TaskItem, Guid> taskRepository,
        IRepository<TaskComment, Guid> commentRepository)
    {
        _bookRepository = bookRepository;
        _taskRepository = taskRepository;
        _commentRepository = commentRepository;
    }

    public async Task SeedAsync(DataSeedContext context)
    {
        if (await _bookRepository.GetCountAsync() <= 0)
        {
            await _bookRepository.InsertAsync(
                new Book
                {
                    Name = "1984",
                    Type = BookType.Dystopia,
                    PublishDate = new DateTime(1949, 6, 8),
                    Price = 19.84f
                },
                autoSave: true
            );

            await _bookRepository.InsertAsync(
                new Book
                {
                    Name = "The Hitchhiker's Guide to the Galaxy",
                    Type = BookType.ScienceFiction,
                    PublishDate = new DateTime(1995, 9, 27),
                    Price = 42.0f
                },
                autoSave: true
            );
        }

        if (await _taskRepository.GetCountAsync() <= 0)
        {
            var setupTask = await _taskRepository.InsertAsync(
                new TaskItem
                {
                    Title = "Set up the first project board",
                    Description = "Create the first task board and invite your team members.",
                    IsClosed = false
                },
                autoSave: true
            );

            var roadmapTask = await _taskRepository.InsertAsync(
                new TaskItem
                {
                    Title = "Draft MVP roadmap",
                    Description = "Document the must-have features for the first public release.",
                    IsClosed = false
                },
                autoSave: true
            );

            await _commentRepository.InsertAsync(
                new TaskComment
                {
                    TaskId = setupTask.Id,
                    Content = "Great starting point. Let's keep the first sprint small."
                },
                autoSave: true
            );

            await _commentRepository.InsertAsync(
                new TaskComment
                {
                    TaskId = roadmapTask.Id,
                    Content = "I can draft the roadmap and share it by Friday."
                },
                autoSave: true
            );
        }
    }
}