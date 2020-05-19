using System;
using Mongo2Go;

namespace Acme.BookStore.MongoDB
{
    public class BookStoreMongoDbFixture : IDisposable
    {
        private static readonly MongoDbRunner MongoDbRunner = MongoDbRunner.Start();
        public static readonly string ConnectionString = MongoDbRunner.ConnectionString;

        public void Dispose()
        {
            MongoDbRunner?.Dispose();
        }
    }
}
