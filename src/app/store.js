import { configureStore } from '@reduxjs/toolkit';
import { campsitesReducer } from '../features/campsites/campsitesSlice';
import { commentsReducer } from '../features/comments/commentsSlice';
import { partnersReducer } from '../features/partners/partnersSlice';
import { promotionsReducer } from '../features/promotions/promotionsSlice';

export const store = configureStore({
  reducer: {
    //add to store by passing it into config store func as an object
    campsites:campsitesReducer, 
    comments: commentsReducer,
    partners: partnersReducer,
    promotions: promotionsReducer
  },
});

console.log(store.getState())
