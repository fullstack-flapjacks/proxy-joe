const dataGenerator = require('../dataGenerator');


describe('Test Randomly Generating Data', () => {
  test('Generates random minutes of either 0, 15 , 30 or 45', () => {
    expect(dataGenerator.randomMinutes() % 15).toBe(0); //tests random number is multiple of 15
  });

  test('Generates array of 200 restaurants', () => {
    var expected = 0;
    expect(dataGenerator.availabilityData).toHaveLength(200);
  });

  test('Generates random restaurant reservation availability data', () => {
    var restaurant = {
      id: 1,
      availability: []
    }
    restaurant.availability.push({
      day: 1,
      hour: dataGenerator.randomInt(15, 22),
      minute: dataGenerator.randomMinutes()
    });
    expect(restaurant.availability[0].hour).toBeGreaterThanOrEqual(15);
    expect(restaurant.availability[0].hour).toBeLessThanOrEqual(22);
    expect(restaurant.availability[0].minute).toBeGreaterThanOrEqual(0);
    expect(restaurant.availability[0].minute).toBeLessThanOrEqual(45);
  });

});