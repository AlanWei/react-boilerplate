# React Boilerplate

## Getting Started

### Development

```bash
npm run install
npm run dev:server
npm run dev
```

Server will run on `http://localhost:8000`
Navigate to `http://localhost:8080`

### Build

```bash
npm run build
```

Compiled assets files will be in `build` folder

## CHANGLOG

### 2020.09.21

1. Upgrade `autoprefixer` to 10.0.0

### 2020.09.13

1. Upgrade react & webpack related packages to the latest.
2. Upgrade redux related packages to `@reduxjs/toolkit`.
3. Add in local server (`mock-json-server`) support for mocking async data fetching.
4. Add in `@babel/polyfill` to support `async` & `await` keywords.

### 2019.01.26

1. Upgrade to React 16.7.0.
2. Fix Jest issue.
3. Keep `babel-eslint` as 8.0.1 to make `yarn lint` work.

### 2018.09.02

1. Upgrade to Babel 7 & related packages.
2. Jest is not compatible at the moment.
3. Add class property demo in User page.

### 2018.07.13

1. Replace `react-router-redux` with `connected-react-router`.

### 2018.07.03

1. Upgrade to ESLint 5.
2. Required Node.js version is either `8.10.0` above or `9.10.0` above.

### 2018.04.10

1. Upgrade to Webpack 4.
2. Clean up Babel & ESLint settings.

> For the server-side-rendering version, please visit [react-boilerplate-ssr](https://github.com/AlanWei/react-boilerplate-ssr)