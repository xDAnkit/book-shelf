# Book Shelf | Mono repo | FullStack

#### The application is built using Lerna, JavaScript, TypeScript NodeJS, ReactJS, Redux, MongoDB

A simple book shelp application for viewing books.

## Prerequisite Setup

- Node
- Lerna
- MongoDB
- NPM Packages Global (Gulp, Nodemon, TypeScript)

## Installation

```javascript
git clone https://github.com/xDAnkit/book-shelf
cd book-shelf
lerna bootstrap

// Run Backend
- cd `./packages/server-app/`
- `npm run gulp` in one terminal
- `npm run watch` in another terminal (Note: MongoDB must be running)
- Open localhost:7000/docs in your browser to test

// Run Frontend
- cd `./packages/client-app/`
- `npm start` in one terminal
- Open localhost:3000 in your browser to test
```

## Features

- TypeScript iimplemented across projects
- I18N implemented
- Responsive Pages
- Same codebase can be used to generate ReactNative Android and iOS apps
- Mock Data available with starting of backend server
- OOPS and Best practises used
