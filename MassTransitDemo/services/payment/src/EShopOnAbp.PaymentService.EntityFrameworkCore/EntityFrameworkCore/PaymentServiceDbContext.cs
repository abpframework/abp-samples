using EShopOnAbp.PaymentService.PaymentRequests;
using Microsoft.EntityFrameworkCore;
using Volo.Abp.Data;
using Volo.Abp.EntityFrameworkCore;

namespace EShopOnAbp.PaymentService.EntityFrameworkCore
{
    [ConnectionStringName(PaymentServiceDbProperties.ConnectionStringName)]
    public class PaymentServiceDbContext :
        AbpDbContext<PaymentServiceDbContext>,
        IPaymentServiceDbContext
    {
        /* Add DbSet properties for your Aggregate Roots / Entities here. */

        /* Notice: We only implemented IIdentityDbContext and ITenantManagementDbContext
         * and replaced them for this DbContext. This allows you to perform JOIN
         * queries for the entities of these modules over the repositories easily. You
         * typically don't need that for other modules. But, if you need, you can
         * implement the DbContext interface of the needed module and use ReplaceDbContext
         * attribute just like IIdentityDbContext and ITenantManagementDbContext.
         *
         * More info: Replacing a DbContext of a module ensures that the related module
         * uses this DbContext on runtime. Otherwise, it will use its own DbContext class.
         */

        public PaymentServiceDbContext(DbContextOptions<PaymentServiceDbContext> options)
            : base(options)
        {

        }

        public DbSet<PaymentRequest> PaymentRequests { get; set; }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            /* Include modules to your migration db context */

            builder.ConfigurePaymentService();

            /* Configure your own tables/entities inside here */
        }
    }
}
