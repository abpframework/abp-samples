using AutoMapper;
using CustomNgAppWithIdentityServer.Users;
using Volo.Abp.AutoMapper;

namespace CustomNgAppWithIdentityServer
{
    public class CustomNgAppWithIdentityServerApplicationAutoMapperProfile : Profile
    {
        public CustomNgAppWithIdentityServerApplicationAutoMapperProfile()
        {
            /* You can configure your AutoMapper mapping configuration here.
             * Alternatively, you can split your mapping configurations
             * into multiple profile classes for a better organization. */

            CreateMap<AppUser, AppUserDto>().Ignore(x => x.ExtraProperties);
        }
    }
}