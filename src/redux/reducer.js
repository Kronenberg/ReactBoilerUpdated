import multireducer from 'multireducer';
import { routerReducer } from 'react-router-redux';
import { reducer as reduxAsyncConnect } from 'redux-connect';
import { reducer as formReducer } from 'redux-form';
import auth from './modules/auth';
import notifs from './modules/notifs';
import counter from './modules/counter';
import info from './modules/info';

import getAllUsersReducer from '../containers/UserManagement/UserManagementReducers/GetAllUsers';
import loginReducer from '../containers/Login/LoginReducers/LoginReducer';
// import widgets from './modules/widgets';
// import survey from './modules/survey';
// import chat from './modules/chat';

export default function createReducers(asyncReducers) {
  return {
    routing: routerReducer,
    reduxAsyncConnect,
    online: (v = true) => v,
    notifs,
    auth,
    counter: multireducer({
      counter1: counter,
      counter2: counter,
      counter3: counter
    }),
    info,
    form: formReducer,
    // widgets,
    // survey,
    // chat,
    getAllUsers: getAllUsersReducer,
    loginUser: loginReducer,
    ...asyncReducers
  };
}
