# Todo Backend

This project implements all the APIs needed to implement a Todo App

## API Reference

#### To login an existing user

```http
  POST /login
```

| Parameter  | Type     | Description                          |
| :--------- | :------- | :----------------------------------- |
| `email`    | `string` | **Required**. Regsitered valid Email |
| `password` | `string` | **Required**. Current Password       |

#### To sign up a new user

```http
  POST /signup
```

| Parameter         | Type     | Description                          |
| :---------------- | :------- | :----------------------------------- |
| `fullName`        | `string` | **Required**. Full Name of the User  |
| `email`           | `string` | **Required**. Valid Email            |
| `password`        | `string` | **Required**. Valid Password         |
| `confirmPassword` | `string` | **Required**. Re-enter same passowrd |

#### List all todos of the current user

```http
  GET /todos
```

| Header          | Type     | Description                |
| :-------------- | :------- | :------------------------- |
| `Authorization` | `string` | **Required**. Bearer token |

#### Create a new todo item

```http
  POST /todos
```

| Header          | Type     | Description                |
| :-------------- | :------- | :------------------------- |
| `Authorization` | `string` | **Required**. Bearer token |

| Parameter | Type     | Description                           |
| :-------- | :------- | :------------------------------------ |
| `item`    | `string` | **Required**. Detail of the todo item |

#### Update an existing todo

```http
  PUT /todos/:id

```

| Header          | Type     | Description                |
| :-------------- | :------- | :------------------------- |
| `Authorization` | `string` | **Required**. Bearer token |

| Parameter     | Type      | Description                                |
| :------------ | :-------- | :----------------------------------------- |
| `id`          | `number`  | **Required**. Id of the item to be updated |
| `item`        | `string`  | **Required**. Detail of the todo item      |
| `isCompleted` | `boolean` | **Required**. Detail of the todo item      |

#### Delete an existing todo

```http
  DELETE /todos/:id

```

| Header          | Type     | Description                |
| :-------------- | :------- | :------------------------- |
| `Authorization` | `string` | **Required**. Bearer token |

| Parameter | Type     | Description                                |
| :-------- | :------- | :----------------------------------------- |
| `id`      | `number` | **Required**. Id of the item to be deleted |

#### Get a single todo

```http
  GET /todos/:id
```

| Header          | Type     | Description                |
| :-------------- | :------- | :------------------------- |
| `Authorization` | `string` | **Required**. Bearer token |

| Parameter | Type     | Description                                |
| :-------- | :------- | :----------------------------------------- |
| `id`      | `number` | **Required**. Id of the item to be fetched |

## Authors

- [Md Shahbaz Ali](https://github.com/codemdshahbazali)

## Badges

[![MIT License](https://img.shields.io/apm/l/atomic-design-ui.svg?)](https://github.com/tterb/atomic-design-ui/blob/master/LICENSEs)

## Deployment

To deploy this project run

```bash
  npm run deploy
```

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`API_KEY`

`ANOTHER_API_KEY`

## Features

- Light/dark mode toggle
- Live previews
- Fullscreen mode
- Cross platform

## Feedback

If you have any feedback, please reach out to us at codemdshahbazali@gmail.com

## 🚀 About Me

I'm a full stack developer who knows React, Redux and Node.js... Contact me to build an amazing website

# Hi, I'm Shahbaz! 👋

## 🔗 Links

[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/md-shahbaz-ali-03238645/)
[![twitter](https://img.shields.io/badge/twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/alishahbaz4u)

## 🛠 Skills

Javascript, React, Redux, Node.js, HTML, CSS...

## Installation

Install todo backend App with npm

```bash
  cd todobackend
  npm install
  npm start
```

## Run Locally

Clone the project

```bash
  git clone https://link-to-project
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```

## Support

For support, email codemdshahbazali.com

## Tech Stack

**Client:** POSTMAN

**Server:** Node, Express

## Pagination

We should not send all the rows in the database to the client. Instead, we should send a paginated response.

Reason:
As querying all the rows inside a database with large data is a very expensive operation. So, we should only send a limited number of rows to the client.

For this we take three things from a client

for sql injection safety we should use parameterized queries
for saving middleman attacks we add https certificates in the server
Change nornmal database user name, password and port names

## Logging

For tracking unknown error and were it occured in the server, we use logging

normal console function are displayed inside our machine console, but when we deploy the website, these console might not be available or we might be running server in the background.

For resolving above issue, we use an npm package called winston. Through winston we can write a file with these consoles or console the issue in some other service

Debug Levels - Priority decreases as the level value increases.
const level = {
error: 0,
warn: 1,
info: 2,
http: 3,
verbose: 4,
debug: 5,
silly: 6,
};

If we have deployed in the production then we dont need console logs. By default logger level is set to info.

We can use process.env to dynamically set logging levels based on enviroment which we are using for deploying the application

## Alerting

Getting logs in slack or discord

For implementing above we use webhooks

Montoring tools
PM2 - this helps in running the application in the background and monitoring the system.errors.
Sentry.io - Alternate for PM2 (monitoring bugs/system)

## Documenting JSdoc & Swagger

This is very important

- 3 types of documentation

  - developer to developer docs - jsdoc
  - consumer documentation - swagger (for frontend)
  - user manual

JSDOC
  npm i -D jsdoc
  make jsdoc.json in which we write the configuration of JSDoc
  then we include statement -> "jsdocs": "./node_modules/.bin/jsdoc -c jsdoc.json" inside script proeprty of package.json

Swagger
  npm i -D swagger-jsdoc swagger-ui-express
