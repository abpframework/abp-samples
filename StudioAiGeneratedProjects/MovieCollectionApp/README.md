# 🎬 MovieCollectionApp

A full-stack movie collection management application built with **ABP Framework** and **Angular**. Organize your movies by genre, track actors, and maintain a beautiful visual catalog with poster images.

![ABP Framework](https://img.shields.io/badge/ABP_Framework-9.2+-purple?style=flat-square)
![.NET](https://img.shields.io/badge/.NET-10.0-blue?style=flat-square)
![Angular](https://img.shields.io/badge/Angular-21-red?style=flat-square)
![MongoDB](https://img.shields.io/badge/MongoDB-8.0-green?style=flat-square)
![License](https://img.shields.io/badge/License-MIT-yellow?style=flat-square)

---

## ✨ Features

- **Movies** — Card-based catalog with poster images, ratings, and detailed information
- **Actors** — Manage actor profiles with biography and birth date
- **Genres** — Categorize movies by genre
- **Relationships** — Link movies to genres (one-to-many) and actors (many-to-many)
- **Referential Integrity** — Prevents deletion of genres/actors that are linked to movies
- **Permissions** — Fine-grained CRUD permissions for each entity
- **Seed Data** — Pre-loaded sample data (genres, actors, movies with poster URLs)
- **Multi-tenancy** — Full multi-tenant support out of the box
- **Localization** — Localization-ready with English translations included

## 🏗️ Architecture

This solution follows **Domain-Driven Design (DDD)** principles using the [ABP Layered Application Template](https://abp.io/docs/latest/solution-templates/layered-web-application).

```
┌─────────────────────────────────────────────────────┐
│                   Angular SPA                        │
│         (Movie Cards, Actor/Genre Tables)            │
└──────────────────────┬──────────────────────────────┘
                       │ REST API
┌──────────────────────┴──────────────────────────────┐
│               HttpApi.Host (.NET)                    │
├─────────────────────────────────────────────────────┤
│  HttpApi          │ Auto API Controllers             │
├───────────────────┼─────────────────────────────────┤
│  Application      │ MovieAppService, GenreAppService │
│                   │ ActorAppService                  │
├───────────────────┼─────────────────────────────────┤
│  Domain           │ Movie, Genre, Actor entities     │
├───────────────────┼─────────────────────────────────┤
│  MongoDB          │ MongoDbContext, Repositories      │
└───────────────────┴─────────────────────────────────┘
```

### Project Structure

| Project | Layer | Description |
|---------|-------|-------------|
| `MovieCollectionApp.Domain.Shared` | Shared | Constants, enums, localization resources |
| `MovieCollectionApp.Domain` | Domain | Entities, domain services, repository interfaces, data seeding |
| `MovieCollectionApp.Application.Contracts` | Contracts | DTOs, application service interfaces, permissions |
| `MovieCollectionApp.Application` | Application | Application service implementations, object mapping |
| `MovieCollectionApp.MongoDB` | Infrastructure | MongoDbContext and repository implementations |
| `MovieCollectionApp.HttpApi` | HTTP API | REST API controllers (auto-generated) |
| `MovieCollectionApp.HttpApi.Host` | Host | API host application with configuration |
| `MovieCollectionApp.DbMigrator` | Tool | Database migration and seed data |
| `angular/` | UI | Angular SPA frontend |

## 📊 Data Model

### Entities

| Entity | Type | Key Properties |
|--------|------|---------------|
| **Movie** | `AuditedAggregateRoot<Guid>` | Title, Year, Description, Rating (0-10), ImageUrl, GenreId, ActorIds |
| **Genre** | `AuditedAggregateRoot<Guid>` | Name, Description |
| **Actor** | `AuditedAggregateRoot<Guid>` | Name, BirthDate, Biography |

### Relationships

```
Genre (1) ──────── (N) Movie
                        │
                        │ ActorIds (embedded list)
                        │
Actor (N) ──────── (N) Movie
```

- **Genre → Movie**: One-to-Many — Each movie has a `GenreId` reference
- **Movie ↔ Actor**: Many-to-Many — Movies store an embedded `List<Guid> ActorIds` (MongoDB document-oriented approach, no junction collection needed)

## 🚀 Getting Started

### Prerequisites

- [.NET 10.0+ SDK](https://dotnet.microsoft.com/download/dotnet)
- [Node.js v18 or v20+](https://nodejs.org/en)
- [MongoDB 6.0+](https://www.mongodb.com/try/download/community) (running on `localhost:27017`)
- [ABP CLI](https://abp.io/docs/latest/cli) (optional but recommended)

### Setup

**1. Clone the repository**

```bash
git clone <your-repo-url>
cd MovieCollectionApp
```

**2. Install client-side dependencies**

```bash
abp install-libs
```

**3. Run the DbMigrator** (seeds initial data)

```bash
dotnet run --project src/MovieCollectionApp.DbMigrator
```

This will create the MongoDB database `MovieCollectionApp` and seed:
- 🎭 3 Genres (Science Fiction, Drama, Action)
- 🧑‍🎤 3 Actors (Keanu Reeves, Leonardo DiCaprio, Scarlett Johansson)
- 🎬 3 Movies (The Matrix, Inception, Avengers: Endgame — with poster URLs)

**4. Start the API Host**

```bash
dotnet run --project src/MovieCollectionApp.HttpApi.Host
```

The API will be available at `https://localhost:44346` (see `launchSettings.json` for exact port).

**5. Start the Angular app**

```bash
cd angular
npm install
npm start
```

The app will be available at `http://localhost:4200`.

### Default Login

| Field | Value |
|-------|-------|
| Username | `admin` |
| Password | `1q2w3E*` |

## 📸 UI Overview

### Movies Page (Card Layout)
- Responsive grid: 1 column (mobile) → 4 columns (desktop)
- Movie poster with fallback placeholder icon
- Rating badge (top-right corner with ⭐)
- Genre badge and release year
- Actor list with 👥 icon
- Hover animation (lift + shadow)
- Create/Edit modal with live image preview

### Genres & Actors Pages
- Classic data table with sorting and pagination
- ABP-style CRUD modals with validation
- Action dropdown (Edit / Delete)

## 🔐 Permissions

Each entity has four permissions:

| Permission | Movies | Actors | Genres |
|-----------|--------|--------|--------|
| View (Default) | `MovieCollectionApp.Movies` | `MovieCollectionApp.Actors` | `MovieCollectionApp.Genres` |
| Create | `MovieCollectionApp.Movies.Create` | `MovieCollectionApp.Actors.Create` | `MovieCollectionApp.Genres.Create` |
| Edit | `MovieCollectionApp.Movies.Edit` | `MovieCollectionApp.Actors.Edit` | `MovieCollectionApp.Genres.Edit` |
| Delete | `MovieCollectionApp.Movies.Delete` | `MovieCollectionApp.Actors.Delete` | `MovieCollectionApp.Genres.Delete` |

Permissions are managed through the ABP Permission Management UI under **Identity → Roles**.

## ⚙️ Configuration

### MongoDB Connection String

Update the connection string in both:
- `src/MovieCollectionApp.HttpApi.Host/appsettings.json`
- `src/MovieCollectionApp.DbMigrator/appsettings.json`

```json
{
  "ConnectionStrings": {
    "Default": "mongodb://localhost:27017/MovieCollectionApp"
  }
}
```

## 🧪 Testing

```bash
# Run all tests
dotnet test

# Run specific test project
dotnet test test/MovieCollectionApp.Application.Tests
dotnet test test/MovieCollectionApp.Domain.Tests
dotnet test test/MovieCollectionApp.MongoDB.Tests
```

## 🛠️ Development

### Adding a New Entity

1. Define constants in `Domain.Shared`
2. Create the entity in `Domain`
3. Add collection to `MongoDbContext`
4. Create DTOs and interface in `Application.Contracts`
5. Add permissions in `Permissions.cs` and `PermissionDefinitionProvider.cs`
6. Create `AppService` in `Application`
7. Add Mapperly mappers in `ApplicationMappers.cs`
8. Add localization keys to `en.json`
9. Create Angular component with proxy service

### Generating Angular Proxies

If you modify an application service interface, regenerate the Angular proxies:

```bash
cd angular
abp generate-proxy -t ng
```

## 📚 Learn More

- [ABP Framework Documentation](https://abp.io/docs/latest)
- [ABP Angular UI](https://abp.io/docs/latest/framework/ui/angular)
- [ABP MongoDB Integration](https://abp.io/docs/latest/framework/data/mongodb)
- [Domain-Driven Design with ABP](https://abp.io/docs/latest/framework/architecture/domain-driven-design)

## 📄 License

This project is licensed under the MIT License.
