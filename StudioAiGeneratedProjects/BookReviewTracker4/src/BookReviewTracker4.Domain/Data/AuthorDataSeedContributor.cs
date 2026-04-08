using System;
using System.Threading.Tasks;
using BookReviewTracker4.Authors;
using BookReviewTracker4.Books;
using Volo.Abp.Data;
using Volo.Abp.DependencyInjection;
using Volo.Abp.Domain.Repositories;

namespace BookReviewTracker4.Data;

public class AuthorDataSeedContributor : IDataSeedContributor, ITransientDependency
{
    private readonly IRepository<Author, Guid> _authorRepository;
    private readonly IRepository<Book, Guid> _bookRepository;
    private readonly IRepository<Review, Guid> _reviewRepository;

    public AuthorDataSeedContributor(
        IRepository<Author, Guid> authorRepository,
        IRepository<Book, Guid> bookRepository,
        IRepository<Review, Guid> reviewRepository)
    {
        _authorRepository = authorRepository;
        _bookRepository = bookRepository;
        _reviewRepository = reviewRepository;
    }

    public async Task SeedAsync(DataSeedContext context)
    {
        if (await _authorRepository.GetCountAsync() > 0)
        {
            return;
        }

        var author1 = new Author(Guid.NewGuid(), "Stephen King")
        {
            Bio = "American author of horror and suspense novels"
        };
        var author2 = new Author(Guid.NewGuid(), "J.K. Rowling")
        {
            Bio = "British author, best known for the Harry Potter series"
        };
        var author3 = new Author(Guid.NewGuid(), "George R. R. Martin")
        {
            Bio = "American novelist and short story writer"
        };

        await _authorRepository.InsertAsync(author1);
        await _authorRepository.InsertAsync(author2);
        await _authorRepository.InsertAsync(author3);

        var book1 = new Book(Guid.NewGuid(), "The Shining", author1.Id)
        {
            Description = "A psychological horror novel about a family isolated in a haunted hotel",
            PublishDate = new DateTime(1977, 1, 28)
        };
        var book2 = new Book(Guid.NewGuid(), "Harry Potter and the Philosopher's Stone", author2.Id)
        {
            Description = "A young wizard discovers his magical heritage",
            PublishDate = new DateTime(1997, 6, 26)
        };
        var book3 = new Book(Guid.NewGuid(), "A Game of Thrones", author3.Id)
        {
            Description = "The first novel in the A Song of Ice and Fire series",
            PublishDate = new DateTime(1996, 8, 1)
        };

        await _bookRepository.InsertAsync(book1);
        await _bookRepository.InsertAsync(book2);
        await _bookRepository.InsertAsync(book3);

        var review1 = new Review(Guid.NewGuid(), book1.Id)
        {
            Rating = 5,
            Comment = "A masterpiece of horror literature. Truly terrifying!",
            ReviewDate = DateTime.Now.AddMonths(-2)
        };
        var review2 = new Review(Guid.NewGuid(), book2.Id)
        {
            Rating = 5,
            Comment = "An enchanting journey into the magical world of wizards.",
            ReviewDate = DateTime.Now.AddMonths(-1)
        };
        var review3 = new Review(Guid.NewGuid(), book3.Id)
        {
            Rating = 4,
            Comment = "Epic fantasy with complex characters and intricate plots.",
            ReviewDate = DateTime.Now.AddDays(-5)
        };

        await _reviewRepository.InsertAsync(review1);
        await _reviewRepository.InsertAsync(review2);
        await _reviewRepository.InsertAsync(review3);
    }
}
