import { combineReducers } from 'redux';
import trucks from './TruckReducer';

const rootReducer = combineReducers({
    trucks: trucks
});

export default rootReducer;