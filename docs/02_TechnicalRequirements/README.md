# Technical Requirements Document

**Author**: AJ Clemente <areljann.c@gmail.com>

---

## Table of Contents

- [Hosting](#hosting)
- [Front-End](#front-end)
- [Back-End](#back-end)
- [Database](#database)
- [Authentication](#authentication)

---

## Hosting

The application will be using the following services for hosting purposes:

- **Heroku**: used to host the front-end and the back-end with their own dynos. Heroku is free to use and the upgraded plans are fairly cheap.

- **AWS S3**: used to host static content, images and media used by the application.

- **GitHub**: used to host the source control of the application.

---

## Front-End

The application will be using the following front-end technologies:

- **Next.js**: used to build the front-end application mainly to leverage the SSR capabilities of the framework. It is also being constantly updated with new features that we can use down the road.

- **Redux**: used for the state management of the application.

- **TypeScript**: used for the type system of the application's codebase.

---

## Back-End

The application will be using the following back-end technologies:

- **Node.js**: used for the back-end's API services and database queries.

- **Express**: used for the back-end's API controller endpoints.

- **Redis**: used for the application's caching purposes.

## Database

The application will be using the following database technologies:

- **PostgreSQL**: used as the main relational database to store data of the users of the application.

## Authentication

The application will be using the following authentication services:

- **Firebase Authentication**: used to manage the authentication of the users of the application.
