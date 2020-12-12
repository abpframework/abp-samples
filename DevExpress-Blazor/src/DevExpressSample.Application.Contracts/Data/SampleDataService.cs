using System;
using System.Collections.Generic;
using System.Linq;
using DevExpressSample.Books;
using Volo.Abp.DependencyInjection;

namespace DevExpressSample.Data
{
    public class SampleDataService : ISingletonDependency
    {
        private List<BookDto> DataSource = new List<BookDto>
        {
            new BookDto
            {
                Id = Guid.NewGuid(),
                Name = "Leonardo Da Vinci",
                PublishDate = DateTime.Today,
                Price = 33.99F
            },
            new BookDto
            {
                Id = Guid.NewGuid(),
                Name = "Einstein: His Life and Universe",
                PublishDate = DateTime.Now,
                Price = 90.99F
            },
            new BookDto
            {
                Id = Guid.NewGuid(),
                Name = "Steve Jobs",
                PublishDate = DateTime.Now,
                Price = 36.99F
            },
            new BookDto
            {
                Id = Guid.NewGuid(),
                Name = "Crime and Punishment",
                PublishDate = DateTime.Now,
                Price = 30.99F
            },
            new BookDto
            {
                Id = Guid.NewGuid(),
                Name = "Notes from Underground",
                PublishDate = DateTime.Now,
                Price = 90.99F
            },
            new BookDto
            {
                Id = Guid.NewGuid(),
                Name = "Kürk Mantolu Madonna",
                PublishDate = DateTime.Now,
                Price = 20.99F
            },
            new BookDto
            {
                Id = Guid.NewGuid(),
                Name = "Outliers: The Story of Success",
                PublishDate = DateTime.Now,
                Price = 17.35F
            },
            new BookDto
            {
                Id = Guid.NewGuid(),
                Name = "Blink: The Power of Thinking Without Thinking",
                PublishDate = DateTime.Now,
                Price = 8.23F
            },
            new BookDto
            {
                Id = Guid.NewGuid(),
                Name = "How Google Works",
                PublishDate = DateTime.Now,
                Price = 25.99F
            },
            new BookDto
            {
                Id = Guid.NewGuid(),
                Name = "Domain-Driven Design",
                PublishDate = DateTime.Now,
                Price = 54.99F
            },
            new BookDto
            {
                Id = Guid.NewGuid(),
                Name = "Implementing Domain-Driven Design",
                PublishDate = DateTime.Now,
                Price = 54.48F
            },
            new BookDto
            {
                Id = Guid.NewGuid(),
                Name = "The Pragmatic Programmer",
                PublishDate = DateTime.Now,
                Price = 59.28F
            },
            new BookDto
            {
                Id = Guid.NewGuid(),
                Name = "Design Patterns",
                PublishDate = DateTime.Now,
                Price = 28.28F
            }
        };
        
        public List<BookDto> GetBooks()
        {
            return DataSource;
        }
        
        public BookDto GetBook(Guid id)
        {
            return DataSource.SingleOrDefault(x => x.Id == id);
        }

        public BookDto CreateBook(BookDto input)
        {
            DataSource.Add(new BookDto
            {
                Id = input.Id,
                Name = input.Name,
                Price = input.Price,
                PublishDate = input.PublishDate
            });

            return input;
        }
        
        public BookDto UpdateBook(BookDto input)
        {
            DeleteBook(input);
            CreateBook(input);
            
            return input;
        }

        public void DeleteBook(BookDto input)
        {
            DataSource.Remove(input);
        }
    }
}