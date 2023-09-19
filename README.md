# Getting Started

Insurance Portal. Utilizing Google OAuth2, NextJS, React, Redux, Ant Design.

## System Requirements

- [Node.js](https://nodejs.org/en/) 10 or later
- MacOS, Windows (including WSL), and Linux are supported

## Setup

- `nvm use` # in case using node version manager
- `yarn install`
- Regarding the Google OAuth client id and secret. Create a `.env` file in the same directory as `.env.example`. Necessary keys are defined in `.env.example`

## Development

```Shell
yarn dev
```

or

```Shell
npm run dev
```

Starts the development server running on `http://localhost:3000`

## Server

### Development

```Shell
yarn dev
```

or

```Shell
npm run dev
```

Starts the development server and makes your application accessible at
`localhost:3000`. Changes in the application code will be hot-reloaded.

### Production

```Shell
yarn build && yarn start
```

or

```Shell
npm run build && npm run start
```

These scripts refer to the different stages of developing an application:

- `dev` - Runs `next` which starts Next.js in development mode
- `build` - Runs `next` build which builds the application for production usage
- `start` - Runs `next` start which starts a Next.js production server
