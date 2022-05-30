const express = require('express');
const { getTrucks, postTruck, deleteTruck } = require('../controllers/vehicle-controllers');
const router = express.Router();

router.get('/trucks', getTrucks);
router.post('/trucks', postTruck);
router.delete('/trucks', deleteTruck);

module.exports = router;