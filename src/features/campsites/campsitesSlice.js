import { CAMPSITES } from "../../app/shared/CAMPSITES";

export const selectAllCampsites = () => {
  return CAMPSITES;
}

//below in the function in the return, returns the campsite with the same id as the id that was passed into the function
export const selectCampsiteById = (id) => {
  return CAMPSITES.find((campsite) => campsite.id === id)
};

//export const selectRandomCampsite = () => {
  //return CAMPSITES[Math.floor(CAMPSITES.length * Math.random())]; //selects random campsite object from the //CAMPSITES array
    
//}