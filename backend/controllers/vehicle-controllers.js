const {getTrucks} = require('../services/vehicle-services');

const retrieveTrucks = async(req, res, next) => {
    try { 
        const vehicles = await getTrucks();
         res.send(vehicles).status(200);
    } catch (e) { 
        res.sendStatus(500);
    }
}

module.exports = {
    retrieveTrucks
}