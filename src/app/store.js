import { configureStore } from '@reduxjs/toolkit';
import { campsitesReducer } from '../features/campsites/campsitesSlice';

export const store = configureStore({
  reducer: {
    //add to store by passing it into config store func as an object
    campsites:campsitesReducer 
  },
});
