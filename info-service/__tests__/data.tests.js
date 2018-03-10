import { generateMockData } from '../database/dataGenerator.js';
import { longitude } from '../database/dataGenerator.js';
import { latitude } from '../database/dataGenerator.js';
import { phoneNumber } from '../database/dataGenerator.js';
import { topTags } from '../database/dataGenerator.js';
import { priceRange} from '../database/dataGenerator.js';
import { reviews } from '../database/dataGenerator.js';
import { morningTime } from '../database/dataGenerator.js';
import { eveningTime } from '../database/dataGenerator.js';

//testing longitude generator function for correct output type
test('creates a string value output', () => {
  let data = longitude();
  expect(typeof data).toBe('string'); 
});

//testing latitude generator function for correct output type 
test('creates a string value output', () => {
  let data = latitude();
  expect(typeof data).toBe('string');
});

//testing phone number generator function for correct output type
test('creates a phone number that is a string', () => {
  let data = phoneNumber();
  expect(typeof data).toBe('string');
});

//testing for 200 entries in the array
test('200 entries in the array', () => {
  expect(generateMockData().length).toEqual(200);
});

// testing for 3 entries in the array
test('3 entries in the array', () => {
  expect(topTags().length).toEqual(3);
});

//testing that output is a string, max is a less or equal 1000 and mins is equal to or greater than 50
test('output equals string, max <= 1000, min >= 50', () => {
  let data = priceRange();
  let priceArray = data.split(' - ');
  let min = parseInt(priceArray[0].slice(1, priceArray[0].length));
  let max = parseInt(priceArray[1].slice(1, priceArray[1].length));
  
  expect(typeof data).toBe('string');
  expect(min).toBeLessThanOrEqual(50);
  expect(max).toBeLessThanOrEqual(1000);
});

//testing for number of reviews to be less or equal to 10000 also testing for string
test('output equals string, max <= 10000', () => {
  let data = reviews();
  let int = parseInt(data.split(''));
  
  expect(typeof data).toBe('string');
  expect(int).toBeLessThanOrEqual(10000);
});

//testing for string
test('outputs type is string', () => {
  let data = morningTime();
  expect(typeof data).toBe('string');
});

//testing for string
test('outputs type is string', () => {
  let data = eveningTime();
  expect(typeof data).toBe('string');
});