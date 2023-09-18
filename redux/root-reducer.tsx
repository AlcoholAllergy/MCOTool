import { combineReducers } from '@reduxjs/toolkit';

import userSelectionReducer from './userSelection/userSelectionSlice';

export const rootReducer = combineReducers({
  userSelect: userSelectionReducer,
});
