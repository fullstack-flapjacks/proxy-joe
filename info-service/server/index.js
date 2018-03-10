const express = require('express');
const cors = require('cors');
const parser = require('body-parser');

//importing database files so tests with the http requests can be ran 
const db = require('../database/index.js');

// ********************************

let app = express();

// let cors = cors();

//importing our router file
const router = require('./router.js');

app.use(cors());

app.use(parser.json());

app.use(express.static(__dirname + '/../client/dist'));
// app.use('/r/:restaurant_id/', express.static(__dirname + '/../client'));


//middleware for cross domain communication
// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });

//using the defined router 
app.use('/r', router);
//all requests will be sent to the router to be directed to the correct endpoints

//handles endpoint errors
app.get('*', (req, res) => {
  res.status(404).send('invalid endpoint');
});
//******************************** */
// app.get(`/r/:restaurant_id/about`, (req, res) => {
//   // console.log('about get function was invoked', req.params.restaurant_id);
//   let id = req.params.restaurant_id;
//   // db.findInformation((error, item) => {
//   //   if (error) throw error;
//   //   res.send(item);
//   // });
//   db.information(id, (item, err) => {
//     // console.log('this is item 0', item[0]);
//     if (err) throw err;
//     res.send(item[0]);
//   });
// })

// app.get(`/r/:restaurant_id/about`, (req, res) => {
//   // console.log('about get function was invoked', req.params.restaurant_id);
//   let id = req.params.restaurant_id;
//   // db.findInformation((error, item) => {
//   //   if (error) throw error;
//   //   res.send(item);
//   // });
//   db.information(id, (item, err) => {
//     // console.log('this is item 0', item[0]);
//     if (err) throw err;
//     res.send(item[0]);
//   });
// })
// app.get(`/restaurant/:restaurant_id/location`, (req, res) => {
//   console.log('location get function was invoked', req.params.restaurant_id);
//   let id = req.params.restaurant_id;
//   // db.findInformation((error, item) => {
//   //   if (error) throw error;
//   //   res.send(item);
//   // });
//   db.location(id, (item, err) => {
//     if (err) throw err;
//     res.send(item);
//   });
// })
//*********************************** */

let port = 1127;

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});