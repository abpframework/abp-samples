using AutoMapper;
using MyCompanyName.MyProjectName.Application.Todos.Dtos;
using MyCompanyName.MyProjectName.Domain.Todos;

namespace MyCompanyName.MyProjectName;

public class MyProjectNameAutoMapperProfile : Profile
{
    public MyProjectNameAutoMapperProfile()
    {
        CreateMap<Todo, TodoDto>();
        CreateMap<CreateTodoDto, Todo>();
        CreateMap<UpdateTodoDto, Todo>();
        
        //Define your AutoMapper configuration here for the Web project.
    }
}
