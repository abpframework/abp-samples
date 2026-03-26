# GymWorkoutPlanner - Angular Application

This is an Angular application built on the ABP Framework. For more information, visit [abp.io](https://abp.io/).

## Pre-requirements

* [Node.js v18 or later](https://nodejs.org/)
* [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

## Getting Started

### Install dependencies

```bash
npm install
```

### Install ABP client-side libraries

If you haven't already, run the following command from the solution root folder:

```bash
abp install-libs
```

### Start the backend

Before running the Angular application, make sure your backend API is running. Start the `GymWorkoutPlanner` application.

## Development server

Run `ng serve` or `npm start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## ABP CLI Commands

### Generate Proxy

Generate TypeScript proxies for your backend APIs:

```bash
abp generate-proxy -t ng
```

This command generates service proxies that allow you to call your backend APIs in a type-safe manner.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

For a production build:

```bash
ng build --configuration production
```

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice.

## Environment Configuration

### Development Environment

The development environment configuration is located in `src/environments/environment.ts`. Update the `apiUrl` to point to your backend API.

### Production Environment

For production, the application uses dynamic environment configuration through the `dynamic-env.json` file. This allows you to configure the environment variables at deployment time without rebuilding the application.

See [Environment](https://abp.io/docs/latest/framework/ui/angular/environment) for more information.

## Additional Resources

* [ABP Angular UI Documentation](https://abp.io/docs/latest/framework/ui/angular/overview)
* [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli)
