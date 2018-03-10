const express = require('express');
const db = require('../database/index.js');
const bodyParser = require('body-parser');

const router = express.Router();

router.use('/:restaurant_id/', express.static(__dirname + '/../client/dist'));

router.use(bodyParser.json());
//http GET request for `/about`
router.get(`/:restaurant_id/about`, (req, res) => {
  // console.log('about get function was invoked', req.params.restaurant_id);
  let id = req.params.restaurant_id;
  db.information(id, (item, err) => {
    // console.log('this is item 0', item[0]);
    if (err) throw err;
    res.send(item[0]);
  });
});

//handles endpoint errors
router.get('*', (req, res) => {
  res.status(404).send('invalid endpoint');
});

module.exports = router;