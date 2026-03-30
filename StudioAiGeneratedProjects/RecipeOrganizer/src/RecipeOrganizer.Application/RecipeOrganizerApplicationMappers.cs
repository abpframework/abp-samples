using Riok.Mapperly.Abstractions;
using Volo.Abp.Mapperly;
using RecipeOrganizer.Books;
using RecipeOrganizer.Categories;
using RecipeOrganizer.Recipes;

namespace RecipeOrganizer;

[Mapper(RequiredMappingStrategy = RequiredMappingStrategy.Target)]
public partial class RecipeOrganizerBookToBookDtoMapper : MapperBase<Book, BookDto>
{
    public override partial BookDto Map(Book source);

    public override partial void Map(Book source, BookDto destination);
}

[Mapper(RequiredMappingStrategy = RequiredMappingStrategy.Target)]
public partial class RecipeOrganizerCreateUpdateBookDtoToBookMapper : MapperBase<CreateUpdateBookDto, Book>
{
    public override partial Book Map(CreateUpdateBookDto source);

    public override partial void Map(CreateUpdateBookDto source, Book destination);
}

// Category mappers
[Mapper(RequiredMappingStrategy = RequiredMappingStrategy.Target)]
public partial class RecipeOrganizerCategoryToCategoryDtoMapper : MapperBase<Category, CategoryDto>
{
    public override partial CategoryDto Map(Category source);

    public override partial void Map(Category source, CategoryDto destination);
}

[Mapper(RequiredMappingStrategy = RequiredMappingStrategy.Target)]
public partial class RecipeOrganizerCreateUpdateCategoryDtoToCategoryMapper : MapperBase<CreateUpdateCategoryDto, Category>
{
    public override partial Category Map(CreateUpdateCategoryDto source);

    public override partial void Map(CreateUpdateCategoryDto source, Category destination);
}

// Ingredient mappers
[Mapper(RequiredMappingStrategy = RequiredMappingStrategy.Target)]
public partial class RecipeOrganizerIngredientToIngredientDtoMapper : MapperBase<Ingredient, IngredientDto>
{
    public override partial IngredientDto Map(Ingredient source);

    public override partial void Map(Ingredient source, IngredientDto destination);
}

[Mapper(RequiredMappingStrategy = RequiredMappingStrategy.Target)]
public partial class RecipeOrganizerCreateUpdateIngredientDtoToIngredientMapper : MapperBase<CreateUpdateIngredientDto, Ingredient>
{
    [MapperIgnoreTarget(nameof(Ingredient.Id))]
    public override partial Ingredient Map(CreateUpdateIngredientDto source);

    [MapperIgnoreTarget(nameof(Ingredient.Id))]
    public override partial void Map(CreateUpdateIngredientDto source, Ingredient destination);
}

// Recipe mappers (CategoryName and Ingredients are set manually in AppService)
[Mapper(RequiredMappingStrategy = RequiredMappingStrategy.Target)]
public partial class RecipeOrganizerRecipeToRecipeDtoMapper : MapperBase<Recipe, RecipeDto>
{
    [MapperIgnoreTarget(nameof(RecipeDto.CategoryName))]
    [MapperIgnoreTarget(nameof(RecipeDto.Ingredients))]
    public override partial RecipeDto Map(Recipe source);

    [MapperIgnoreTarget(nameof(RecipeDto.CategoryName))]
    [MapperIgnoreTarget(nameof(RecipeDto.Ingredients))]
    public override partial void Map(Recipe source, RecipeDto destination);
}

[Mapper(RequiredMappingStrategy = RequiredMappingStrategy.Target)]
public partial class RecipeOrganizerCreateUpdateRecipeDtoToRecipeMapper : MapperBase<CreateUpdateRecipeDto, Recipe>
{
    [MapperIgnoreTarget(nameof(Recipe.Ingredients))]
    public override partial Recipe Map(CreateUpdateRecipeDto source);

    [MapperIgnoreTarget(nameof(Recipe.Ingredients))]
    public override partial void Map(CreateUpdateRecipeDto source, Recipe destination);
}
