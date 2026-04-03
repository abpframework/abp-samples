using Riok.Mapperly.Abstractions;
using Volo.Abp.Mapperly;
using TaskAndCommentBoard.Entities.Books;
using TaskAndCommentBoard.Entities.Tasks;
using TaskAndCommentBoard.Services.Dtos.Books;
using TaskAndCommentBoard.Services.Dtos.Tasks;

namespace TaskAndCommentBoard.ObjectMapping;

[Mapper(RequiredMappingStrategy = RequiredMappingStrategy.Target)]
public partial class TaskAndCommentBoardBookToBookDtoMapper : MapperBase<Book, BookDto>
{
    public override partial BookDto Map(Book source);

    public override partial void Map(Book source, BookDto destination);
}

[Mapper(RequiredMappingStrategy = RequiredMappingStrategy.Target)]
public partial class TaskAndCommentBoardCreateUpdateBookDtoToBookMapper : MapperBase<CreateUpdateBookDto, Book>
{
    public override partial Book Map(CreateUpdateBookDto source);

    public override partial void Map(CreateUpdateBookDto source, Book destination);
}

[Mapper(RequiredMappingStrategy = RequiredMappingStrategy.Target)]
public partial class TaskAndCommentBoardBookDtoToCreateUpdateBookDtoMapper : MapperBase<BookDto, CreateUpdateBookDto>
{
    public override partial CreateUpdateBookDto Map(BookDto source);

    public override partial void Map(BookDto source, CreateUpdateBookDto destination);
}

[Mapper(RequiredMappingStrategy = RequiredMappingStrategy.Target)]
public partial class TaskAndCommentBoardTaskItemToTaskDtoMapper : MapperBase<TaskItem, TaskDto>
{
    public override partial TaskDto Map(TaskItem source);

    public override partial void Map(TaskItem source, TaskDto destination);
}

[Mapper(RequiredMappingStrategy = RequiredMappingStrategy.Target)]
public partial class TaskAndCommentBoardCreateUpdateTaskDtoToTaskItemMapper : MapperBase<CreateUpdateTaskDto, TaskItem>
{
    public override partial TaskItem Map(CreateUpdateTaskDto source);

    public override partial void Map(CreateUpdateTaskDto source, TaskItem destination);
}

[Mapper(RequiredMappingStrategy = RequiredMappingStrategy.Target)]
public partial class TaskAndCommentBoardTaskDtoToCreateUpdateTaskDtoMapper : MapperBase<TaskDto, CreateUpdateTaskDto>
{
    public override partial CreateUpdateTaskDto Map(TaskDto source);

    public override partial void Map(TaskDto source, CreateUpdateTaskDto destination);
}

[Mapper(RequiredMappingStrategy = RequiredMappingStrategy.Target)]
public partial class TaskAndCommentBoardTaskCommentToTaskCommentDtoMapper : MapperBase<TaskComment, TaskCommentDto>
{
    public override partial TaskCommentDto Map(TaskComment source);

    public override partial void Map(TaskComment source, TaskCommentDto destination);
}
