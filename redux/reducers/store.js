import {combineReducers} from 'redux';
import {configureStore} from '@reduxjs/toolkit';
import {logger} from 'redux-logger';

import User from './User';

const rootReducer = combineReducers({
  user: User,
});

const store = configureStore({
  reducer: rootReducer,
  // middleware: getDefaultMiddleware => {
  //   return getDefaultMiddleware().concat(logger);
  // },
});

export default store;