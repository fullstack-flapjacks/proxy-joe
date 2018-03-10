const express = require('express');
const path = require('path');
const db = require('../database/helper.js');
const bodyParser = require('body-parser');

const router = express.Router();

router.use('/:id', express.static(path.join(__dirname, '/../client/dist')));
router.use(bodyParser.json());

router.get('/:id/menu', (req, res) => {
  const { id } = req.params;
  if (id > 0 && id < 201) {
    db.fetch(id, data => res.status(200).send(JSON.stringify(data)));
  } else {
    res.status(404).send('No such restaurant ID');
  }
});

router.get('*', (req, res) => {
  res.status(404).send('Invalid Restaurant ID');
});

module.exports = router;
