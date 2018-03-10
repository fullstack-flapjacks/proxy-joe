const express = require('express');
const path = require('path');
const router = express.Router();
const helper = require('../db/index.js');

router.use("/:id", express.static(path.join(__dirname, '../public')));

router.get('/:id/suggestions', (req, res) => {
  helper.find(req.params.id, function(restaurants) {
    res.send(restaurants);
  })
})

module.exports = router;