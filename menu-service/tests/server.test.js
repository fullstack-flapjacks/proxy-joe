const request = require('supertest');
const server = require('../server/index');

describe('server side tests', () => {
  test('should receive a status code 200 for a get request', async () => {
    const res = await request(server).get('/');
    expect(res.statusCode).toBe(200);
  });
  test('shoud receive a status code 404 for invalid url', async () => {
    const res = await request(server).get('/d');
    expect(res.statusCode).toBe(404);
  });
  test('should receive an object of data for a specific restaurant', async () => {
    const res = await request(server).get('/r/10/menu').query({ restaurantId: 10 });
    expect(typeof res).toBe('object');
  });
  // test('should receive data related to the restaurant id', async () => {
  //   const res = await request(server).get('/r/100/menu').query({ restaurantId: 100 });
  //   expect(JSON.stringify(res.body)).toBe('100');
  // })
});
