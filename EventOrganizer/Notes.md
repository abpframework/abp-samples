# Event Organizer Workshop Notes

This document has been prepared for me (@hikalkan) as a reference on giving the ABP & Blazor Workshop.

## Preparing to the Workshop

* Open the MongoDB Compass Community.
* Delete the existing MongoDB database.
* Create & open the solution in Rider, build, run migrations & test it.

## Requirements

The following tools are needed to be able to run the solution.

* .NET 5.0 SDK
* Visual Studio 2019 16.8.0+ or another compatible IDE (e.g. Rider)
* MongoDB Server

## Development

### Creating a new Application

* Use the following command line tool

````bash
abp new EventOrganizer -u blazor -d mongodb --preview
````

* Open the solution in Visual Studio 2019