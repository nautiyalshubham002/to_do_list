import {configureStore, combineReducers} from '@reduxjs/toolkit';
import LoginReducer from './slices/LoginSlice';
import ListReducer from './slices/ListSlice';

const store = configureStore({
  reducer: combineReducers({
    LoginReducer,
    ListReducer,
  }),
});

export default store;
