<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest


# Login Backend (API)

## Description
This project is the backend (API) portion of a basic login application. It calls a local frontend project [basic-login-frontend](https://github.com/mchadds/basic-login-frontend)

## Endpoints
- Users (GET, extended funcionality for POST)
- Providers (GET, extended funcionality for POST)
- Login (POST)

## Functionality
- Retrieve all insurance providers which are a key part of the login process
- Retrieve all users
- login --> check for a user with matching credentials (username and password) with the correct insurance provider

## Swagger Documentation
Swagger documentation on the endpoints can be found at the localhost url + /

## Tools & Technologies
- [Nest.js](https://nestjs.com/) A progressive Node.js framework
- [Passport](https://www.passportjs.org/docs/) Passport is middleware for Node.js that makes it easy to implement authentication and authorization
- [Swagger](https://swagger.io/docs/) Swagger can help you design and document your APIs at scale

## Languages
- [TypeScript](https://www.typescriptlang.org/)


## Installation

```bash
$ npm install
```

## Running the app in dev

```bash
# development
$ npm run start:dev
```

Run the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) if the front end of the application is started first or [http://localhost:3001](http://localhost:3001) if the backend of the application is started first 




