using AutoMapper;
using MatBlazorSample.Users;
using Volo.Abp.AutoMapper;

namespace MatBlazorSample
{
    public class MatBlazorSampleApplicationAutoMapperProfile : Profile
    {
        public MatBlazorSampleApplicationAutoMapperProfile()
        {
            /* You can configure your AutoMapper mapping configuration here.
             * Alternatively, you can split your mapping configurations
             * into multiple profile classes for a better organization. */

            CreateMap<AppUser, AppUserDto>().Ignore(x => x.ExtraProperties);
        }
    }
}