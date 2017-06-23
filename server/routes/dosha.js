'use strict';

const express = require('express');

// eslint-disable-next-line new-cap
const router = express.Router();
const knex = require('../knex');
const humps = require('humps');

router.get('/dosha', (req, res, next) => {
  console.log("in dosha");
  res.send({"a": "yes"});
});

module.exports = router;
