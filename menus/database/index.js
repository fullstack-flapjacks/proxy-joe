const Sequelize = require('sequelize');
const helper = require('./helper');
const faker = require('faker');

const user = 'Joe';

const sequelize = new Sequelize('menus', user, '', {
  host: 'localhost',
  // uncomment port if using Postgres.app
  // port: 5554,
  dialect: 'postgres',
});

const menuNames = ['Breakfast', 'Lunch', 'Dinner'];

const menuCategoryNames = ['Appetizers', 'Mains', 'Sides', 'Beverages'];

const RestaurantMenuItems = sequelize.define('RestaurantMenuItems', {
  restaurantId: Sequelize.INTEGER,
  menuName: Sequelize.TEXT,
  menuCategoryName: Sequelize.TEXT,
  menuItemName: Sequelize.TEXT,
  menuItemDescription: Sequelize.TEXT,
  menuItemPrice: Sequelize.DECIMAL,
});

// creates restaurant data
function createRestaurantData() {
  for (let i = 1; i <= 200; i += 1) {
    for (let j = 0; j < menuNames.length; j += 1) {
      for (let k = 0; k < menuCategoryNames.length; k += 1) {
        for (let l = 1; l <= helper.randomInt(5, 10); l += 1) {
          RestaurantMenuItems.create({
            restaurantId: i,
            menuName: menuNames[j],
            menuCategoryName: menuCategoryNames[k],
            menuItemName: helper.capFirstLet(faker.lorem.words()),
            menuItemDescription: faker.lorem.sentence().toLowerCase(),
            menuItemPrice: helper.randomPrice(),
          });
        }
      }
    }
  }
}
// overwrites current data and stores new
sequelize
  .sync({
    force: true,
  })
  .then(() => {
    createRestaurantData();
  });

module.exports.create = createRestaurantData;
