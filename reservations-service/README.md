# Fullstack Flapjacks - Reservation Component

> The full project represents a restaurant page on Open Table. This particular repo is focused on the reservation widget that enables bookings (by day and time) for any given restaurant.

## Related Projects

- https://github.com/fullstack-flapjacks/Menu-Module
- https://github.com/fullstack-flapjacks/suggested-restaurants
- https://github.com/fullstack-flapjacks/About_Map_Info-module
- https://github.com/fullstack-flapjacks/review-service
- https://github.com/fullstack-flapjacks/reservation-widget

## Table of Contents

1. [Usage](#Usage)
2. [Requirements](#requirements)
3. [Development](#development)

## Usage

1. From root directory, run 'npm install' to install all dependencies
2. Connect to a Mongodb instance, then from the root directory Run 'node database/seed.js' - this will seed randomly generated availability data to DB
3. Open 'http://localhost:2002/r/[id]' where [id] represents any number from 1-200 from any browser to use the widget ([id] represents a restaurant instance)

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- etc

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
```

