using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Volo.Abp.Domain.Repositories;

namespace Acme.BookStore.AngularMaterial.Authors
{
    public interface IAuthorRepository : IRepository<Author, Guid>
    {
        Task<Author> FindByNameAsync(string name);

        Task<List<Author>> GetListAsync(
            int skipCount,
            int maxResultCount,
            string sorting,
            string filter = null
        );
    }
}
