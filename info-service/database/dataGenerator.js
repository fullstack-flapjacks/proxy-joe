const faker = require('faker');
const mongoose = require('mongoose');

// //data capsule
// let data = [];

//create ID counter
let idCount = 1;

//longitude generator
let longitude = () => {
  let randomData = Math.random() * (90 - (-90) + 1) + -90;
  return randomData.toFixed(6).toString();
};

//latitude generator
let latitude = () => {
  let randomData = Math.random() * (180 - (-180) + 1) + -180;
  return randomData.toFixed(6).toString();
};

//phone number generator 
let phoneNumber = () => {
  let areaCode = Math.floor(Math.random() * (999 - 100 + 1)) + 100;
  let threeDigits = Math.floor(Math.random() * (999 - 100 + 1)) + 100;
  let lastDigits = Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;
  return `+1(${areaCode})${threeDigits}-${lastDigits}`;
};

//price range generator
let priceRange = () => {
  let min = Math.floor(Math.random() * (50 - 2 + 1)) + 2;
  let max = Math.floor(Math.random() * (1000 - 51 + 1)) + 51;
  return `$${min} - $${max}`;
};

//ratings generator
let ratings = () => {
  return `${(Math.random() * (5 - 0 + 1)).toFixed(1)}`;
}

//reviews generator
let reviews = () => {
  let numberOfReviews = Math.floor(Math.random() * 10000);
  return `${numberOfReviews}`;
}

//create top tags for the widget => data structure will be an array
let topTags = () => {
  let existingTags = [`family`, `bored`, `unproductive`, `selfish`, `snoring`, `loud`, `coffee`, `southern`, `jackfruit`];
  let randomNumber1 = Math.floor(Math.random() * 999) + 1;
  let randomNumber2 = Math.floor(Math.random() * 999) + 1;
  let randomNumber3 = Math.floor(Math.random() * 999) + 1;
  let generateRandomIndex1 = Math.floor(Math.random() * 8);
  let generateRandomIndex2 = Math.floor(Math.random() * 8);
  let generateRandomIndex3 = Math.floor(Math.random() * 8);
  let tags = [`${existingTags[generateRandomIndex1]}(${randomNumber1})`, `${existingTags[generateRandomIndex2]}(${randomNumber2})`, `${existingTags[generateRandomIndex3]}(${randomNumber3})`];
  return tags;
}

//map iframe generator 
let map = () => {
  let src = [
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12308.576074439732!2d-119.81603175675218!3d39.533804990683485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80994736925d9b39%3A0x4a97f62f6cef3a33!2sPanda+Express!5e0!3m2!1sen!2sus!4v1520055173139',
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d49234.757746445895!2d-119.83315499523152!3d39.53316561011268!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x4a97f62f6cef3a33!2sPanda+Express!5e0!3m2!1sen!2sus!4v1520055307414',
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d49234.77265043827!2d-119.83315502909356!3d39.53314459474762!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x809939008cb1d7c3%3A0x8df6555f2ab84a47!2sPanda+Express!5e0!3m2!1sen!2sus!4v1520055448101',
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d49234.78010243118!2d-119.83315504602459!3d39.533134087066216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8099409a38829c0f%3A0x8c8f676af0f4eca5!2sPanda+Express!5e0!3m2!1sen!2sus!4v1520055469856',
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3128.253143216128!2d-121.9577230841964!3d38.36626497965601!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x809ab3ad23692995%3A0x684d387e11cb15cc!2sEVgo+Car+Charging+Station!5e0!3m2!1sen!2sus!4v1520055495094'
  ];
  let srcGenerator = Math.floor(Math.random() * 5);
  return src[srcGenerator];
}

//am time generator
let morningTime = () => {
  let minTime = Math.floor(Math.random() * (9 - 6 + 1)) + 6;
  let maxTime = Math.floor(Math.random() * (12 - 10 + 1)) + 10;
  if (maxTime !== 12) {
    return `${minTime}am - ${maxTime}am`;
  } else {
    return `${minTime}am - ${maxTime}pm`;
  }
}

//pm time generator
let eveningTime = () => {
  let maxTime = Math.floor(Math.random() * (11 - 1 + 1)) + 1;
  return `${12}pm - ${maxTime}pm`;
}

//function to create mock data. Will make 200 instances of the same schema and insert it into the database
//generate the actual data
let generateMockData = () => {
  //data capsule
  let data = [];
  for (let i = 0; i < 200; i++) {
    data.push({
      restaurant_id: idCount,
      name: faker.company.companyName(),
      latitude: latitude(),
      longitude: longitude(),
      map: map(),
      diningStyle: faker.lorem.word(),
      cuisines: faker.lorem.word(),
      hoursOfOperations: {
       monday: {
         served : true,
         lunch: morningTime(),
         dinner: eveningTime()
       },
       friday: {
         Served: true, 
         lunch: morningTime(),
         dinner: eveningTime()
       },
       saturday: {
         served : true,
         lunch: morningTime(),
         dinner: eveningTime()
       }
      }, 
      crossStreet: faker.lorem.sentence(),
      dressCode: faker.lorem.sentence(),
      priceRange: priceRange(),
      paymentOptions: {
        visa: true,
        master: true,
        amex: true,
        discover: true
      },
      phoneNumber: phoneNumber() ,
      website: `${faker.lorem.word()}.com`,
      catering: {
        cater: true,
        description: faker.lorem.paragraph()
      },
      publicTransit: faker.lorem.sentence(),
      executiveChef: faker.name.firstName(),
      additional: {
        chef: true, 
        description: faker.lorem.paragraph()
      },
      specialEvents: faker.lorem.paragraph(), 
      promotions: faker.lorem.paragraph(),
      rating: ratings(),
      reviews: reviews(),
      topTags: topTags(),
      description: faker.lorem.paragraph() + faker.lorem.paragraph(),
      neighborhood: faker.lorem.words(),
      parking: faker.lorem.sentence()
    });
    idCount++;
  }
  // console.log(data);
  return data;
};


module.exports.generateMockData = generateMockData;
module.exports.longitude = longitude;
module.exports.latitude = latitude;
module.exports.phoneNumber = phoneNumber;
module.exports.priceRange = priceRange;
module.exports.ratings = ratings;
module.exports.reviews = reviews;
module.exports.topTags = topTags;
module.exports.map = map;
module.exports.morningTime = morningTime;
module.exports.eveningTime = eveningTime;