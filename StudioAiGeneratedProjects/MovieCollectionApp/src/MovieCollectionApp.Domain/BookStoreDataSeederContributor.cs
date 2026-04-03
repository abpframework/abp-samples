using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using MovieCollectionApp.Actors;
using MovieCollectionApp.Genres;
using MovieCollectionApp.Movies;
using Volo.Abp.Data;
using Volo.Abp.DependencyInjection;
using Volo.Abp.Domain.Repositories;

namespace MovieCollectionApp;

public class MovieCollectionAppDataSeederContributor
    : IDataSeedContributor, ITransientDependency
{
    private readonly IRepository<Genre, Guid> _genreRepository;
    private readonly IRepository<Actor, Guid> _actorRepository;
    private readonly IRepository<Movie, Guid> _movieRepository;

    public MovieCollectionAppDataSeederContributor(
        IRepository<Genre, Guid> genreRepository,
        IRepository<Actor, Guid> actorRepository,
        IRepository<Movie, Guid> movieRepository)
    {
        _genreRepository = genreRepository;
        _actorRepository = actorRepository;
        _movieRepository = movieRepository;
    }

    public async Task SeedAsync(DataSeedContext context)
    {
        await SeedMovieDataAsync();
    }

    private async Task SeedMovieDataAsync()
    {
        if (await _genreRepository.GetCountAsync() > 0)
        {
            return;
        }

        // Seed Genres
        var actionGenre = await _genreRepository.InsertAsync(
            new Genre { Name = "Action", Description = "Action and adventure movies" },
            autoSave: true
        );

        var sciFiGenre = await _genreRepository.InsertAsync(
            new Genre { Name = "Sci-Fi", Description = "Science fiction movies" },
            autoSave: true
        );

        var dramaGenre = await _genreRepository.InsertAsync(
            new Genre { Name = "Drama", Description = "Drama and character-driven movies" },
            autoSave: true
        );

        // Seed Actors
        var keanuReeves = await _actorRepository.InsertAsync(
            new Actor
            {
                Name = "Keanu Reeves",
                BirthDate = new DateTime(1964, 9, 2),
                Biography = "Canadian actor known for The Matrix trilogy and John Wick series."
            },
            autoSave: true
        );

        var laurenceFishburne = await _actorRepository.InsertAsync(
            new Actor
            {
                Name = "Laurence Fishburne",
                BirthDate = new DateTime(1961, 7, 30),
                Biography = "American actor known for playing Morpheus in The Matrix trilogy."
            },
            autoSave: true
        );

        var leonardoDiCaprio = await _actorRepository.InsertAsync(
            new Actor
            {
                Name = "Leonardo DiCaprio",
                BirthDate = new DateTime(1974, 11, 11),
                Biography = "American actor and film producer known for Inception and Titanic."
            },
            autoSave: true
        );

        // Seed Movies
        await _movieRepository.InsertAsync(
            new Movie
            {
                Title = "The Matrix",
                Year = 1999,
                Description = "A computer hacker learns about the true nature of reality.",
                Rating = 8.7f,
                ImageUrl = "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
                GenreId = sciFiGenre.Id,
                ActorIds = new List<Guid> { keanuReeves.Id, laurenceFishburne.Id }
            },
            autoSave: true
        );

        await _movieRepository.InsertAsync(
            new Movie
            {
                Title = "John Wick",
                Year = 2014,
                Description = "An ex-hitman comes out of retirement to track down the gangsters who took everything from him.",
                Rating = 7.4f,
                ImageUrl = "https://image.tmdb.org/t/p/w500/fZPSd91yGE9fCcCe6OoQr6E3Bev.jpg",
                GenreId = actionGenre.Id,
                ActorIds = new List<Guid> { keanuReeves.Id }
            },
            autoSave: true
        );

        await _movieRepository.InsertAsync(
            new Movie
            {
                Title = "Inception",
                Year = 2010,
                Description = "A thief who steals corporate secrets through dream-sharing technology.",
                Rating = 8.8f,
                ImageUrl = "https://image.tmdb.org/t/p/w500/ljsZTbVsrQSqZgWeep2B1QiDKuh.jpg",
                GenreId = sciFiGenre.Id,
                ActorIds = new List<Guid> { leonardoDiCaprio.Id }
            },
            autoSave: true
        );
    }
}
