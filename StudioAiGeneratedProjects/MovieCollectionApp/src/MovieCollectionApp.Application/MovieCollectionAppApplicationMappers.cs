using Riok.Mapperly.Abstractions;
using Volo.Abp.Mapperly;
using MovieCollectionApp.Genres;
using MovieCollectionApp.Actors;
using MovieCollectionApp.Movies;

namespace MovieCollectionApp;

// Genre mappers
[Mapper(RequiredMappingStrategy = RequiredMappingStrategy.Target)]
public partial class MovieCollectionAppGenreToGenreDtoMapper : MapperBase<Genre, GenreDto>
{
    public override partial GenreDto Map(Genre source);

    public override partial void Map(Genre source, GenreDto destination);
}

[Mapper(RequiredMappingStrategy = RequiredMappingStrategy.Target)]
public partial class MovieCollectionAppCreateUpdateGenreDtoToGenreMapper : MapperBase<CreateUpdateGenreDto, Genre>
{
    public override partial Genre Map(CreateUpdateGenreDto source);

    public override partial void Map(CreateUpdateGenreDto source, Genre destination);
}

// Actor mappers
[Mapper(RequiredMappingStrategy = RequiredMappingStrategy.Target)]
public partial class MovieCollectionAppActorToActorDtoMapper : MapperBase<Actor, ActorDto>
{
    public override partial ActorDto Map(Actor source);

    public override partial void Map(Actor source, ActorDto destination);
}

[Mapper(RequiredMappingStrategy = RequiredMappingStrategy.Target)]
public partial class MovieCollectionAppCreateUpdateActorDtoToActorMapper : MapperBase<CreateUpdateActorDto, Actor>
{
    public override partial Actor Map(CreateUpdateActorDto source);

    public override partial void Map(CreateUpdateActorDto source, Actor destination);
}

// Movie mappers
[Mapper(RequiredMappingStrategy = RequiredMappingStrategy.Target)]
public partial class MovieCollectionAppMovieToMovieDtoMapper : MapperBase<Movie, MovieDto>
{
    public override partial MovieDto Map(Movie source);

    public override partial void Map(Movie source, MovieDto destination);
}

[Mapper(RequiredMappingStrategy = RequiredMappingStrategy.Target)]
public partial class MovieCollectionAppCreateUpdateMovieDtoToMovieMapper : MapperBase<CreateUpdateMovieDto, Movie>
{
    public override partial Movie Map(CreateUpdateMovieDto source);

    public override partial void Map(CreateUpdateMovieDto source, Movie destination);
}

// Lookup mappers
[Mapper(RequiredMappingStrategy = RequiredMappingStrategy.Target)]
public partial class MovieCollectionAppGenreToGenreLookupDtoMapper : MapperBase<Genre, GenreLookupDto>
{
    public override partial GenreLookupDto Map(Genre source);

    public override partial void Map(Genre source, GenreLookupDto destination);
}

[Mapper(RequiredMappingStrategy = RequiredMappingStrategy.Target)]
public partial class MovieCollectionAppActorToActorLookupDtoMapper : MapperBase<Actor, ActorLookupDto>
{
    public override partial ActorLookupDto Map(Actor source);

    public override partial void Map(Actor source, ActorLookupDto destination);
}
