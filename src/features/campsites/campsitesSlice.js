import { CAMPSITES } from "../../app/shared/CAMPSITES";
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  campsitesArray: CAMPSITES
}

const campsitesSlice = createSlice({
  name: 'campsites', 
  initialState
});

export const campsitesReducer = campsitesSlice;

export const selectAllCampsites = () => {
  return CAMPSITES;
}


//below in the function in the return, returns the campsite with the same id as the id that was passed into the function
export const selectCampsiteById = (id) => {
  return CAMPSITES.find((campsite) => campsite.id === parseInt(id))
};

export const selectFeaturedCampsite = () => {
  return CAMPSITES.find((campsite) => campsite.featured)
}


//export const selectRandomCampsite = () => {
  //return CAMPSITES[Math.floor(CAMPSITES.length * Math.random())]; //selects random campsite object from the //CAMPSITES array
    
//}