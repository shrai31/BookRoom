import { combineReducers } from 'redux';
import { allRoomsReducer, roomsDetailsReducer } from './roomReducers';
import { authReducer } from './userReducer';

const Reducers = combineReducers({
    allRooms: allRoomsReducer,
    roomDetails: roomsDetailsReducer,
    auth:authReducer,
});

export default Reducers;
