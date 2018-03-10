# Menu Component
> The menu component for Fullstack Flapjack's OpenTable restaurant page clone.

## Related Projects

  - https://github.com/fullstack-flapjacks/review-service
  - https://github.com/fullstack-flapjacks/suggested-restaurants
  - https://github.com/fullstack-flapjacks/reservations
  - https://github.com/fullstack-flapjacks/About_Map_Info-module

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

- Install PostgreSQL with the terminal command brew install postgresql
- In the terminal, run pg_ctl -D /usr/local/var/postgres start to start up Postgres.
- To create the database 'menus', run createdb menus.
- Go to database/index.js and helper.js.
- Change the 'const user' to your psql user name.
- To seed data into the 'menus' database, run npm run seed.
- In a different terminal, on the root directory, run npm run server in the terminal to start the server.
- Go to 'localhost:6600/r/(number btwn 1 - 200)' to see the rendered menu.

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
{
  "name": "menu_module",
  "version": "0.0.1",
  "description": "The menu component for Fullstack Flapjack's OpenTable restaurant page clone.",
  "author": "Joe Tam",
  "license": "none",
  "babel": {
    "presets": [
      "env",
      "react",
      "stage-2"
    ]
  },
  "engines": {
    "node": ">=6.13.0"
  },
  "scripts": {
    "webpack": "webpack -d --watch",
    "seed": "node ./database/index.js",
    "start": "nodemon server/index.js",
    "test": "jest --forceExit",
    "test:watch": "jest --watch",
    "test:coverage": "jest --coverage --forceExit"
  },
  "jest": {
    "verbose": true,
    "setupFiles": [
      "./tests/test-setup.js"
    ],
    "snapshotSerializers": [
      "enzyme-to-json/serializer"
    ]
  },
  "dependencies": {
    "axios": "^0.18.0",
    "babel-jest": "^22.4.1",
    "bluebird": "^3.5.1",
    "body-parser": "^1.18.2",
    "enzyme-to-json": "^3.3.1",
    "express": "^4.16.2",
    "faker": "^4.1.0",
    "nodemon": "^1.15.1",
    "pg": "^7.4.1",
    "pg-hstore": "^2.3.2",
    "react": "^16.2.0",
    "react-dom": "^16.2.0",
    "react-hot-loader": "^3.1.3",
    "react-test-renderer": "^16.2.0",
    "sequelize": "^4.34.0",
    "sequelize-cli": "^4.0.0"
  },
  "devDependencies": {
    "babel-core": "^6.26.0",
    "babel-loader": "^7.1.3",
    "babel-preset-env": "^1.6.1",
    "babel-preset-react": "^6.24.1",
    "babel-preset-stage-2": "^6.24.1",
    "enzyme": "^3.3.0",
    "enzyme-adapter-react-16": "^1.1.1",
    "eslint": "^4.18.2",
    "eslint-config-airbnb": "^16.1.0",
    "eslint-config-hackreactor": "git://github.com/reactorcore/eslint-config-hackreactor",
    "eslint-plugin-import": "^2.9.0",
    "eslint-plugin-jsx-a11y": "^6.0.3",
    "eslint-plugin-react": "^7.7.0",
    "jest": "^22.4.2",
    "supertest": "^3.0.0",
    "webpack": "^4.0.1",
    "webpack-cli": "^2.0.9",
    "webpack-dev-server": "^3.0.0"
  }
}


## Development

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
```

