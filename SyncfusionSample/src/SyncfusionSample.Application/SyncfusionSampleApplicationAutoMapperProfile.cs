using AutoMapper;
using SyncfusionSample.Users;
using Volo.Abp.AutoMapper;

namespace SyncfusionSample
{
    public class SyncfusionSampleApplicationAutoMapperProfile : Profile
    {
        public SyncfusionSampleApplicationAutoMapperProfile()
        {
            /* You can configure your AutoMapper mapping configuration here.
             * Alternatively, you can split your mapping configurations
             * into multiple profile classes for a better organization. */

            CreateMap<AppUser, AppUserDto>().Ignore(x => x.ExtraProperties);
        }
    }
}