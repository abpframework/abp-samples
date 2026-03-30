using Riok.Mapperly.Abstractions;
using Volo.Abp.Mapperly;
using RecipeOrganizer.Books;
using RecipeOrganizer.Categories;
using RecipeOrganizer.Recipes;

namespace RecipeOrganizer.Blazor;

[Mapper(RequiredMappingStrategy = RequiredMappingStrategy.Target)]
public partial class RecipeOrganizerBlazorMappers : MapperBase<BookDto, CreateUpdateBookDto>
{
    public override partial CreateUpdateBookDto Map(BookDto source);

    public override partial void Map(BookDto source, CreateUpdateBookDto destination);
}

[Mapper(RequiredMappingStrategy = RequiredMappingStrategy.Target)]
public partial class RecipeOrganizerCategoryDtoToCreateUpdateMapper : MapperBase<CategoryDto, CreateUpdateCategoryDto>
{
    public override partial CreateUpdateCategoryDto Map(CategoryDto source);

    public override partial void Map(CategoryDto source, CreateUpdateCategoryDto destination);
}

[Mapper(RequiredMappingStrategy = RequiredMappingStrategy.Target)]
public partial class RecipeOrganizerRecipeDtoToCreateUpdateMapper : MapperBase<RecipeDto, CreateUpdateRecipeDto>
{
    [MapperIgnoreTarget(nameof(CreateUpdateRecipeDto.Ingredients))]
    [MapperIgnoreSource(nameof(RecipeDto.CategoryName))]
    [MapperIgnoreSource(nameof(RecipeDto.Ingredients))]
    public override partial CreateUpdateRecipeDto Map(RecipeDto source);

    [MapperIgnoreTarget(nameof(CreateUpdateRecipeDto.Ingredients))]
    [MapperIgnoreSource(nameof(RecipeDto.CategoryName))]
    [MapperIgnoreSource(nameof(RecipeDto.Ingredients))]
    public override partial void Map(RecipeDto source, CreateUpdateRecipeDto destination);
}

[Mapper(RequiredMappingStrategy = RequiredMappingStrategy.Target)]
public partial class RecipeOrganizerIngredientDtoToCreateUpdateMapper : MapperBase<IngredientDto, CreateUpdateIngredientDto>
{
    [MapperIgnoreSource(nameof(IngredientDto.Id))]
    public override partial CreateUpdateIngredientDto Map(IngredientDto source);

    [MapperIgnoreSource(nameof(IngredientDto.Id))]
    public override partial void Map(IngredientDto source, CreateUpdateIngredientDto destination);
}

