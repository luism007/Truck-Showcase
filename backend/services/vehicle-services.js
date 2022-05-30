const { TruckSchema } = require('../models/vehicle-db');
const  mongoose =  require('mongoose');

const Truck = mongoose.model('vehicles-collections', TruckSchema);

const getTrucks = async () => {
    const trucks = await Truck.find({});
    console.log('Trucks', trucks);
    return trucks;
}

module.exports = {
    getTrucks
}