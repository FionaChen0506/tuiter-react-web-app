import { createSlice } from "@reduxjs/toolkit";
import tuits from './tuits.json';

const currentUser = {
    "userName": "Gwen Stacy",
    "handle": "@hereisgwen",
    "image": "tuit-image5.jpg",
   };
   
   const templateTuit = {
    ...currentUser,
    "topic": "Space",
    "time": "1 min",
    "liked": false,
    "replies": 0,
    "retuits": 0,
    "likes": 0,
   }

const tuitsSlice = createSlice({
 name: 'tuits',
 initialState: { tuits: tuits },

 reducers: {
    deleteTuit(state, action) {
        const index = state.tuits
           .findIndex(tuit =>
              tuit._id === action.payload);
        state.tuits.splice(index, 1);
    },

    createTuit(state, action) {
        state.tuits.unshift({
          ...action.payload,
          ...templateTuit,
          _id: (new Date()).getTime(),
        })
      },

      toggleLike(state, action) {
        const { tuitId } = action.payload;
        const tuit = state.tuits.find((tuit) => tuit._id === tuitId);
  
        if (tuit) {
          tuit.liked = !tuit.liked;
          tuit.likes = tuit.liked ? tuit.likes + 1 : tuit.likes - 1;
        }
      },
 }
});

export const { createTuit, deleteTuit, toggleLike } = tuitsSlice.actions;
export default tuitsSlice.reducer;