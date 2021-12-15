using AutoMapper;
using MyCompanyName.MyProjectName.Entities;
using MyCompanyName.MyProjectName.Services.Dtos;

namespace MyCompanyName.MyProjectName;

public class MyProjectNameAutoMapperProfile : Profile
{
    public MyProjectNameAutoMapperProfile()
    {
        CreateMap<Todo, TodoDto>();
    }
}
