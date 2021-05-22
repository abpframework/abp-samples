using Volo.Abp.Data;
using Volo.Abp.Identity;

namespace UnifiedContextsDemo
{
    public static class MyUserExtensions
    {
        public const string SocialSecurityNumber = "SocialSecurityNumber";

        public static void SetSocialSecurityNumber(this IdentityUser user, string number)
        {
            user.SetProperty(SocialSecurityNumber, number);
        }
        
        public static string GetSocialSecurityNumber(this IdentityUser user)
        {
            return user.GetProperty<string>(SocialSecurityNumber);
        }
    }
}