/**
 * Created by Kronenberg on 6/18/17.
 */

import axios from 'axios';
import {
  LOGIN_INITIAL,
  LOGIN_PENDING,
  LOGIN_SUCCESS,
  LOGIN_REJECTED
} from './LoginReducers/LoginReducer';

export function localLogin(user) {
  console.log(user);
  return (dispatch) => {
    dispatch({ type: LOGIN_PENDING });
    axios.post('https://hidden-bastion.herokuapp.com/api/users', {
      username: user.username,
      email: user.email,
      password: user.password
    })
      .then(function (response) {
        dispatch({ type: LOGIN_SUCCESS, payload: response });
      })
      .catch(function (response) {
        dispatch({ type: LOGIN_REJECTED, payload: response });
      });
  }
}

//
// export function localLogin(user) {
//   return (dispatch) => {
//     dispatch({ type: LOGIN_PENDING });
//     axios.post('http://localhost:3008/login',
//       {
//         email: user.email,
//         password: user.password
//       })
//       .then((response) => {
//         console.log(response);
//       })
//       .catch((error) => {
//         dispatch({ type: LOGIN_REJECTED, payload: error });
//       });
//   }
// }