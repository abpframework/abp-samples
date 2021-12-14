using AutoMapper;
using MyCompanyName.MyProjectName.Entities.Todos;
using MyCompanyName.MyProjectName.Services.Dtos;

namespace MyCompanyName.MyProjectName;

public class MyProjectNameAutoMapperProfile : Profile
{
    public MyProjectNameAutoMapperProfile()
    {
        CreateMap<Todo, TodoDto>();
        
        //Define your AutoMapper configuration here for the Web project.
    }
}
