using System;
using System.Threading.Tasks;
using Volo.Abp.Data;
using Volo.Abp.DependencyInjection;
using Volo.Abp.Domain.Repositories;
using Volo.Abp.MultiTenancy;

namespace Acme.BookStore.Books;

    public class BookService : ITransientDependency
    {
        private readonly IRepository<Book, Guid> _bookRepository;
        private readonly ICurrentTenant _currentTenant;

        public BookService(IRepository<Book, Guid> bookRepository, ICurrentTenant currentTenant)
        {
            _bookRepository = bookRepository;
            _currentTenant = currentTenant;
        }

        public async Task<long> GetTenantBookCountAsync(Guid? tenantId)
        {
            using (_currentTenant.Change(tenantId))
            {
                return await _bookRepository.GetCountAsync();
            }
        }
    }
    
    public class BookService2 : ITransientDependency
    {
        private readonly IRepository<Book, Guid> _bookRepository;
        private readonly IDataFilter _dataFilter;

        public BookService2(IRepository<Book, Guid> bookRepository, IDataFilter dataFilter)
        {
            _bookRepository = bookRepository;
            _dataFilter = dataFilter;
        }

        public async Task<long> GetTotalBookCountAsync()
        {
            using (_dataFilter.Disable<IMultiTenant>())
            {
                return await _bookRepository.GetCountAsync();
            }
        }
    }
