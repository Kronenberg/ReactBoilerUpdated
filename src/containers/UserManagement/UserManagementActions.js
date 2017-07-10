/**
 * Created by Kronenberg on 6/24/17.
 */
/* eslint-disable eol-last */
import axios from 'axios';

import {
  GET_ALL_USERS_PENDING,
  GET_ALL_USERS_SUCCESS,
  GET_ALL_USERS_REJECTED
} from './UserManagementReducers/GetAllUsers';

export function getAllUsers() {
  return (dispatch) => {
    dispatch({ type: GET_ALL_USERS_PENDING });
    axios.get('https://guarded-river-54866.herokuapp.com/api/users')
      .then((response) => {
        dispatch({ type: GET_ALL_USERS_SUCCESS, payload: response });
      })
      .catch((error) => {
        dispatch({ type: GET_ALL_USERS_REJECTED, payload: error });
      });
  };
}