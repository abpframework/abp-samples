using Riok.Mapperly.Abstractions;
using Volo.Abp.Mapperly;
using GymWorkoutPlanner.Entities.Books;
using GymWorkoutPlanner.Entities.Exercises;
using GymWorkoutPlanner.Services.Dtos.Books;
using GymWorkoutPlanner.Services.Dtos.Exercises;

namespace GymWorkoutPlanner.ObjectMapping;

[Mapper(RequiredMappingStrategy = RequiredMappingStrategy.Target)]
public partial class GymWorkoutPlannerBookToBookDtoMapper : MapperBase<Book, BookDto>
{
    public override partial BookDto Map(Book source);

    public override partial void Map(Book source, BookDto destination);
}

[Mapper(RequiredMappingStrategy = RequiredMappingStrategy.Target)]
public partial class GymWorkoutPlannerCreateUpdateBookDtoToBookMapper : MapperBase<CreateUpdateBookDto, Book>
{
    public override partial Book Map(CreateUpdateBookDto source);

    public override partial void Map(CreateUpdateBookDto source, Book destination);
}

[Mapper(RequiredMappingStrategy = RequiredMappingStrategy.Target)]
public partial class GymWorkoutPlannerBookDtoToCreateUpdateBookDtoMapper : MapperBase<BookDto, CreateUpdateBookDto>
{
    public override partial CreateUpdateBookDto Map(BookDto source);

    public override partial void Map(BookDto source, CreateUpdateBookDto destination);
}

[Mapper(RequiredMappingStrategy = RequiredMappingStrategy.Target)]
public partial class GymWorkoutPlannerExerciseToExerciseDtoMapper : MapperBase<Exercise, ExerciseDto>
{
    public override partial ExerciseDto Map(Exercise source);

    public override partial void Map(Exercise source, ExerciseDto destination);
}

[Mapper(RequiredMappingStrategy = RequiredMappingStrategy.Target)]
public partial class GymWorkoutPlannerCreateUpdateExerciseDtoToExerciseMapper : MapperBase<CreateUpdateExerciseDto, Exercise>
{
    public override partial Exercise Map(CreateUpdateExerciseDto source);

    public override partial void Map(CreateUpdateExerciseDto source, Exercise destination);
}

[Mapper(RequiredMappingStrategy = RequiredMappingStrategy.Target)]
public partial class GymWorkoutPlannerExerciseDtoToCreateUpdateExerciseDtoMapper : MapperBase<ExerciseDto, CreateUpdateExerciseDto>
{
    public override partial CreateUpdateExerciseDto Map(ExerciseDto source);

    public override partial void Map(ExerciseDto source, CreateUpdateExerciseDto destination);
}
