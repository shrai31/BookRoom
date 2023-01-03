import {
  ALL_ROOMS_FAIL,
  ALL_ROOMS_SUCCESS,
  ROOMS_DETAILS_FAIL,
  ROOMS_DETAILS_SUCCESS,
  CLEAR_ERRORS,
} from '../constants/roomConstants';

//All room reducer
const initialState = { rooms: [] };
export const allRoomsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ALL_ROOMS_SUCCESS:
      return {
        roomCount: action.payload.roomsCount,
        resPerPage: action.payload.resPerPage,
        filteredRoomsCount: action.payload.filteredRoomsCount,
        rooms: action.payload.rooms,
      };
    case ALL_ROOMS_FAIL:
      return {
        error: action.payload,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

//Room Detail reducer
const initialStateRoom = { room: {} };
export const roomsDetailsReducer = (state = initialStateRoom, action) => {
  switch (action.type) {
    case ROOMS_DETAILS_SUCCESS:
      return {
        rooms: action.payload,
      };
    case ROOMS_DETAILS_FAIL:
      return {
        error: action.payload,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};
