const helper = require('../database/helper.js');

describe('test helper functions', () => {
  test('should get a random integer between 1 and 25', () => {
    const number = helper.randomInt(1, 25);
    expect(number).toBeGreaterThanOrEqual(1);
    expect(number).toBeLessThanOrEqual(25);
  });
  test('should get a random price between 1.95 and 25.95', () => {
    const price = helper.randomPrice();
    expect(price).toBeGreaterThanOrEqual(1.95);
    expect(price).toBeLessThanOrEqual(25.95);
  });
  test('should capitalize the first letter of a string', () => {
    const string = helper.capFirstLet('hello');
    expect(string).toBe('Hello');
  });
});
