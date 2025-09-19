# ReparaturnetzwerkFrontend

This project is the frontend for the Repair Network "[repami](https://repami.de/)", supporting a network of high-quality repair services.

## Languages and Frameworks Used

[![My Skills](https://skillicons.dev/icons?i=angular,ts,js,html,css,less,docker)](https://skillicons.dev)

Additional Frameworks:
- [Ng-Zorro](https://www.npmjs.com/package/ng-zorro-antd) (Ant Design): A UI component library for Angular
- [Leaflet](https://www.npmjs.com/package/leaflet): A JavaScript library for interactive maps
- [SweetAlert2](https://www.npmjs.com/package/sweetalert2): A library for creating alert modals

## Prerequisites

- [Node.js](https://nodejs.org/en/download/package-manager) (version 18.13.0 or higher)
- [Angular CLI](https://github.com/angular/angular-cli) (version 17.0.10 or higher)

## Quickstart

### Initial Setup

- Run `npm install`
- Run `npm install -g @angular/cli`

## Start Development Server

Run `npm run start` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## API Services

The API services for interacting with the backend (Strapi) are generated using [ng-openapi-gen](https://www.npmjs.com/package/ng-openapi-gen). After running the `update-swagger.bat` script, the services will be located in the following directory: `src/app/api/services/`

### How It Works

Whenever you create a new endpoint in Strapi (such as a collection type or single type) or update existing endpoints, run the `update-swagger.bat` script. This script regenerates both the service functions and TypeScript models in the frontend. The models reflect the backend's data structures, including any nested relationships, so you’ll find the correct structure and data types for each endpoint. This ensures type safety and makes it easier to work with backend data in your code.

## Code Scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running Unit Tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running End-to-End Tests

Run `ng e2e` to execute end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further Help

To get more help on the Angular CLI, use `ng help` or check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
