import { combineReducers } from 'redux';
import { allRoomsReducer, roomsDetailsReducer } from './roomReducers';

const Reducers = combineReducers({
    allRooms: allRoomsReducer,
    roomDetails: roomsDetailsReducer,
});

export default Reducers;
