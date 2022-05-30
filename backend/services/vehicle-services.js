const { TruckSchema } = require('../models/vehicle-db');
const  mongoose =  require('mongoose');

const Truck = mongoose.model('vehicles-collections', TruckSchema);

const retrieveTrucks = async () => {
    const trucks = await Truck.find({});
    return trucks;
}

const createTruck = async (vehicle) => {
    //const truck = new Truck(vehicle);
    return await Truck.create(vehicle);
}

const removeVehicle = async(id) => {
    return await Truck.findByIdAndDelete(id);
}

module.exports = {
    retrieveTrucks,
    createTruck,
    removeVehicle
}