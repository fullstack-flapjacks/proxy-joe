const express = require('express');
const path = require('path');
const app = express();
const router = require('./routes.js');



app.use(express.static(path.join(__dirname, '../public')));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use('/r', router);

let port = 3001;

app.listen(port, function() {
  console.log('listening on port ' + port);
});