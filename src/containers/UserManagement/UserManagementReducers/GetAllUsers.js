/**
 * Created by Kronenberg on 6/24/17.
 */

/* eslint-disable eol-last */

export const GET_ALL_USERS_INITIAL = 'GET_ALL_USERS_INITIAL';
export const GET_ALL_USERS_PENDING = 'GET_ALL_USERS_PENDING';
export const GET_ALL_USERS_SUCCESS = 'GET_ALL_USERS_SUCCESS';
export const GET_ALL_USERS_REJECTED = 'GET_ALL_USERS_REJECTED';

const initialState = {
  pending: false,
  success: false,
  rejected: false,
  response: null,
  error: null
};

function getAllUsersReducer(state = initialState, action = {}) {
  switch (action.type) {
    case GET_ALL_USERS_PENDING:
      return {
        ...state,
        pending: true,
        success: false,
        rejected: false
      };
    case GET_ALL_USERS_SUCCESS:
      return {
        ...state,
        success: true,
        pending: false,
        accessToken: action.payload,
        response: action.payload
      };
    case GET_ALL_USERS_REJECTED:
      return {
        ...state,
        pending: false,
        success: false,
        rejected: true,
        error: action.payload
      };
    case GET_ALL_USERS_INITIAL:
      return {
        ...state,
        pending: false,
        success: false,
        rejected: false,
        response: null,
        error: null
      };
    default:
      return state;
  }
}

export default getAllUsersReducer;