import { combineReducers } from 'redux';
import { allRoomsReducer } from './roomReducers';

const Reducers = combineReducers({
    allRooms: allRoomsReducer
});

export default Reducers;
