const Sequelize = require('sequelize');

const user = 'Joe';

const sequelize = new Sequelize('menus', user, '', {
  host: 'localhost',
  // uncomment port if using Postgres.app
  // port: 5554,
  dialect: 'postgres',
});

const RestaurantMenuItems = sequelize.define('RestaurantMenuItems', {
  restaurantId: Sequelize.INTEGER,
  menuName: Sequelize.TEXT,
  menuCategoryName: Sequelize.TEXT,
  menuItemName: Sequelize.TEXT,
  menuItemDescription: Sequelize.TEXT,
  menuItemPrice: Sequelize.DECIMAL,
});

// helper functions
function getRandomIntInclusive(from, to) {
  const min = Math.ceil(from);
  const max = Math.floor(to);
  // The maximum is inclusive and the minimum is inclusive
  return Math.floor(Math.random() * ((max - min) + 1)) + min;
}

function getRandomPrice() {
  let int = getRandomIntInclusive(1, 25);
  int += 0.95;
  return int;
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function fetchRestaurantMenuItems(id, cb) {
  RestaurantMenuItems.findAll({
    where: {
      restaurantId: id,
    },
  })
    .then(data => cb(data))
    .catch((err) => {
      throw err;
    });
}

module.exports = {
  fetch: fetchRestaurantMenuItems,
  randomInt: getRandomIntInclusive,
  randomPrice: getRandomPrice,
  capFirstLet: capitalizeFirstLetter,
};
