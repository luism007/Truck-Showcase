// state initialized to an empty array, since we'll be storing an array of trucks
const truckReducer = (state = [], action) => {
    switch(action.type) { 
        case "CREATE_TRUCK":
            return [...state, action.truck];
        case "INITIALIZE_TRUCKS":
            return [state, ...action.trucks];
        default:
            return state;
    }

}

export default truckReducer;