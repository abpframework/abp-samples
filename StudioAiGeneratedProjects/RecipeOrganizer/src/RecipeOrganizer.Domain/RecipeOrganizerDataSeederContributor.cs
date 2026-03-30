using System;
using System.Threading.Tasks;
using RecipeOrganizer.Books;
using RecipeOrganizer.Categories;
using RecipeOrganizer.Recipes;
using Volo.Abp.Data;
using Volo.Abp.DependencyInjection;
using Volo.Abp.Domain.Repositories;

namespace RecipeOrganizer;

public class RecipeOrganizerDataSeederContributor
    : IDataSeedContributor, ITransientDependency
{
    private readonly IRepository<Book, Guid> _bookRepository;
    private readonly IRepository<Category, Guid> _categoryRepository;
    private readonly IRepository<Recipe, Guid> _recipeRepository;

    public RecipeOrganizerDataSeederContributor(
        IRepository<Book, Guid> bookRepository,
        IRepository<Category, Guid> categoryRepository,
        IRepository<Recipe, Guid> recipeRepository)
    {
        _bookRepository = bookRepository;
        _categoryRepository = categoryRepository;
        _recipeRepository = recipeRepository;
    }

    public async Task SeedAsync(DataSeedContext context)
    {
        await SeedBooksAsync();
        await SeedRecipesAsync();
    }

    private async Task SeedBooksAsync()
    {
        if (await _bookRepository.GetCountAsync() <= 0)
        {
            await _bookRepository.InsertAsync(
                new Book
                {
                    Name = "1984",
                    Type = BookType.Dystopia,
                    PublishDate = new DateTime(1949, 6, 8),
                    Price = 19.84f
                },
                autoSave: true
            );

            await _bookRepository.InsertAsync(
                new Book
                {
                    Name = "The Hitchhiker's Guide to the Galaxy",
                    Type = BookType.ScienceFiction,
                    PublishDate = new DateTime(1995, 9, 27),
                    Price = 42.0f
                },
                autoSave: true
            );
        }
    }

    private async Task SeedRecipesAsync()
    {
        if (await _recipeRepository.GetCountAsync() > 0)
        {
            return;
        }

        // Seed categories
        var italianCategory = await _categoryRepository.InsertAsync(
            new Category
            {
                Name = "Italian",
                Description = "Classic Italian cuisine with fresh ingredients",
                IconClass = "fa fa-pizza-slice"
            },
            autoSave: true
        );

        var dessertsCategory = await _categoryRepository.InsertAsync(
            new Category
            {
                Name = "Desserts",
                Description = "Sweet treats and baked goods",
                IconClass = "fa fa-cookie"
            },
            autoSave: true
        );

        var quickMealsCategory = await _categoryRepository.InsertAsync(
            new Category
            {
                Name = "Quick Meals",
                Description = "Ready in 30 minutes or less",
                IconClass = "fa fa-bolt"
            },
            autoSave: true
        );

        // Seed recipes
        await _recipeRepository.InsertAsync(
            new Recipe
            {
                Title = "Classic Margherita Pizza",
                Description = "A timeless Italian pizza with fresh tomatoes, mozzarella, and basil.",
                PreparationTime = 45,
                Difficulty = RecipeDifficulty.Medium,
                CategoryId = italianCategory.Id,
                Ingredients =
                {
                    new Ingredient(Guid.NewGuid()) { Name = "Pizza Dough", Quantity = 300, Unit = "grams" },
                    new Ingredient(Guid.NewGuid()) { Name = "Tomato Sauce", Quantity = 150, Unit = "ml" },
                    new Ingredient(Guid.NewGuid()) { Name = "Fresh Mozzarella", Quantity = 200, Unit = "grams" },
                    new Ingredient(Guid.NewGuid()) { Name = "Fresh Basil", Quantity = 10, Unit = "leaves" }
                }
            },
            autoSave: true
        );

        await _recipeRepository.InsertAsync(
            new Recipe
            {
                Title = "Spaghetti Carbonara",
                Description = "Creamy pasta with pancetta, eggs, and Pecorino Romano.",
                PreparationTime = 25,
                Difficulty = RecipeDifficulty.Medium,
                CategoryId = italianCategory.Id,
                Ingredients =
                {
                    new Ingredient(Guid.NewGuid()) { Name = "Spaghetti", Quantity = 400, Unit = "grams" },
                    new Ingredient(Guid.NewGuid()) { Name = "Pancetta", Quantity = 150, Unit = "grams" },
                    new Ingredient(Guid.NewGuid()) { Name = "Eggs", Quantity = 4, Unit = "pieces" },
                    new Ingredient(Guid.NewGuid()) { Name = "Pecorino Romano", Quantity = 100, Unit = "grams" }
                }
            },
            autoSave: true
        );

        await _recipeRepository.InsertAsync(
            new Recipe
            {
                Title = "Chocolate Lava Cake",
                Description = "Decadent warm chocolate cake with a molten center.",
                PreparationTime = 30,
                Difficulty = RecipeDifficulty.Hard,
                CategoryId = dessertsCategory.Id,
                Ingredients =
                {
                    new Ingredient(Guid.NewGuid()) { Name = "Dark Chocolate", Quantity = 200, Unit = "grams" },
                    new Ingredient(Guid.NewGuid()) { Name = "Butter", Quantity = 100, Unit = "grams" },
                    new Ingredient(Guid.NewGuid()) { Name = "Eggs", Quantity = 3, Unit = "pieces" },
                    new Ingredient(Guid.NewGuid()) { Name = "Sugar", Quantity = 80, Unit = "grams" }
                }
            },
            autoSave: true
        );

        await _recipeRepository.InsertAsync(
            new Recipe
            {
                Title = "Avocado Toast",
                Description = "Simple and nutritious breakfast with smashed avocado on toasted bread.",
                PreparationTime = 10,
                Difficulty = RecipeDifficulty.Easy,
                CategoryId = quickMealsCategory.Id,
                Ingredients =
                {
                    new Ingredient(Guid.NewGuid()) { Name = "Sourdough Bread", Quantity = 2, Unit = "slices" },
                    new Ingredient(Guid.NewGuid()) { Name = "Ripe Avocado", Quantity = 1, Unit = "piece" },
                    new Ingredient(Guid.NewGuid()) { Name = "Lemon Juice", Quantity = 15, Unit = "ml" },
                    new Ingredient(Guid.NewGuid()) { Name = "Red Pepper Flakes", Quantity = 2, Unit = "grams" }
                }
            },
            autoSave: true
        );
    }
}
