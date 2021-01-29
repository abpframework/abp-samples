using System;
using System.Linq;
using System.Threading.Tasks;
using LdapForNet;
using LdapForNet.Native;

namespace AbpLdapSample
{
    class Program
    {
        static async Task Main(string[] args)
        {
            var server = "your server ip";
            var serverPort = 389;
            var baseDc = "dc=abp,dc=io";
            var adminUserName = "admin";
            var adminPassword = "123456";
            var testUserName = "test";
            var testPassword = "123456";

            using (var ldapConnection = new LdapConnection())
            {
                ldapConnection.Connect(server, serverPort, Native.LdapSchema.LDAP, Native.LdapVersion.LDAP_VERSION3);
                try
                {
                    await ldapConnection.BindAsync(Native.LdapAuthType.Simple, new LdapCredential
                    {
                        // Configure username according to your LDAP config:
                        // cn=admin,dc=abp,dc=com or just username.
                        UserName = $"cn={adminUserName},{baseDc}",
                        Password = adminPassword
                    });
                    
                    Console.WriteLine($"{adminUserName} login success!");

                    // Configure filter according to your LDAP config:
                    // (&(uid=admin)) or (&(objectClass=user)(sAMAccountName={admin}))
                    var searchResults = await ldapConnection.SearchAsync(baseDc, $"(&(uid={testUserName}))");
                    Console.WriteLine();
                    Console.WriteLine($"{testUserName} attributes:");
                    
                    var userEntry = searchResults.First();
                    Console.WriteLine(string.Join(", ", userEntry.ToDirectoryEntry().Attributes));

                    await ldapConnection.BindAsync(Native.LdapAuthType.Simple, new LdapCredential
                    {
                        UserName = userEntry.Dn,
                        Password = testPassword
                    });
                    
                    Console.WriteLine();
                    Console.WriteLine($"{testUserName} login success!");
                }
                catch (Exception e)
                {
                    Console.WriteLine(e);
                }
                
                Console.ReadKey();
            }
        }
    }
}
