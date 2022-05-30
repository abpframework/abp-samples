using System;
using System.Threading.Tasks;
using IdentityServer4.Events;
using IdentityServer4.Services;
using Volo.Abp.Data;
using Volo.Abp.Identity;

namespace ConcurrentLogin.AspNetIdentity;

// public class ConcurrentLoginTokenIssuedSuccessEventSink : IEventSink
// {
//     protected IdentityUserManager UserManager { get; }
//
//     public ConcurrentLoginTokenIssuedSuccessEventSink(IdentityUserManager userManager)
//     {
//         UserManager = userManager;
//     }
//
//     public async Task PersistAsync(Event evt)
//     {
//         if (evt is TokenIssuedSuccessEvent tokenIssuedSuccessEvent)
//         {
//             var user = await UserManager.FindByIdAsync(tokenIssuedSuccessEvent.SubjectId);
//             if (user != null)
//             {
//                 user.SetProperty(ConcurrentLoginConsts.ConcurrentLoginToken, Guid.NewGuid().ToString("N"));
//                 await UserManager.UpdateAsync(user);
//             }
//         }
//     }
// }
