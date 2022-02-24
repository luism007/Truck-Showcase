const createTruck = (truck) => {
    return { type: "CREATE_TRUCK", truck: truck }
};

const initializeTrucks = (trucks) => {
    return { type: "INITIALIZE_TRUCKS", trucks: trucks}
};

export default { createTruck, initializeTrucks };
