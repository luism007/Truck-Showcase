const express = require('express');
const { retrieveTrucks } = require('../controllers/vehicle-controllers');
const router = express.Router();
console.log(retrieveTrucks);
router.get('/trucks', retrieveTrucks);

module.exports = router;