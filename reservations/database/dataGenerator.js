/*
Data Generator File
This js file initializes random restaurant availability data that will be seeded into the DB
*/

var availabilityData = [];
var bookingsData = [];

//generate a random number between two values inclusive
function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}

//generates random minutes between 0 - 45
var randomMinutes = function randomMinutes() {
  var random = randomInt(0, 3);
  var minutes = {
    0: 0,
    1: 15,
    2: 30,
    3: 45
  }
  return minutes[random];
}

var initializeBookings = function(restaurant, day) {
  restaurant.bookings.push({
    day: day,
    bookings_count: randomInt(0, 50)
  });
}

var generateRandomTimeSlots = function generateRandomTimeSlots(restaurant, day, numSlots) {
  for (var i = 0; i < numSlots; i++) {
    restaurant.availability.push({
      day: day,
      hour: randomInt(15, 22),
      minute: randomMinutes()
    });
  }
}

var generateRandomRestaurantData = function generateRandomRestaurantData() {
  //initialize 200 restaurant ids
  for (var i = 0; i < 200; i++) {
    //instantiate empty restaurant object
    var restaurant = {
      id: i,
      availability: []
    }
    var bookings = {
      id: i,
      bookings: []
    }
    //Generate Time Slots for each of 30 days
    for (var day = 1; day <= 31; day++) {
      generateRandomTimeSlots(restaurant, day, randomInt(0, 7)); //Randomize number of available slots per day
      initializeBookings(bookings, day);
    }
    availabilityData.push(restaurant); //push restaurant object into raw data array
    bookingsData.push(bookings);
  }
}

generateRandomRestaurantData();

module.exports.availabilityData = availabilityData;
module.exports.bookingsData = bookingsData;

//for testing

module.exports.randomMinutes = randomMinutes;
module.exports.randomInt = randomInt;
module.exports.generateRandomTimeSlots = generateRandomTimeSlots;



