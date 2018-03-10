const mongoose = require('mongoose'); // include DB object
const seed = require('./dataGenerator');
const models = require('./dbModels');

mongoose.connect('mongodb://localhost/restaurants');

let Availability = models.availability;
let Bookings = models.bookings;


Availability.create(seed.availabilityData, (err, entries)=>{
  if (err){
    console.log('Error seeding restaurant availbility data', err);
    return;
  }
  console.log('Successfully seeded restaurant availability data', entries);

});

Bookings.create(seed.bookingsData, (err, entries)=>{
  if (err){
    console.log('Error seeding bookings count data', err);
    return;
  }
  console.log('Successfully seeded bookings count data', entries);
});





