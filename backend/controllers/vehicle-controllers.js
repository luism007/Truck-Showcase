const {retrieveTrucks, createTruck, removeVehicle} = require('../services/vehicle-services');

const getTrucks = async(req, res, next) => {
    try { 
        const vehicles = await retrieveTrucks();
         res.send(vehicles).status(200);
    } catch (e) { 
        res.sendStatus(500);
    }
}

const postTruck = async(req, res, next) => {
    try { 
        const truck = req.body;
        console.log('Truck', truck);
        await createTruck(truck);
        res.json(truck).status(201);
    } catch (e) { 
        res.send({message: 'Failed to create Vehicle!'}).status(500);
    }
}

const deleteTruck = async(req, res, next) => {
    try {
        const id = req.body['id'];
        await removeVehicle(id);
        res.json({message: 'Deleted Vehicle!'}).status(200);
    } catch (e) {
        res.send({message: 'Failed to remove Vehicle'}).status(500);
    }
}

module.exports = {
    getTrucks,
    postTruck,
    deleteTruck
}