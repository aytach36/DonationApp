import {combineReducers} from 'redux';
import {configureStore} from '@reduxjs/toolkit';

import User from './User';

const rootReducer = combineReducers({
  user: User,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
