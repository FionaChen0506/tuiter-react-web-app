import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import TuitsItem from "./tuits-item";
import TuitStats from "./tuits-stats";

const HomeTuits = () => {
  const { tuits } = useSelector(state => state.tuits)
  const dispatch = useDispatch();
  // Function to handle like toggle
  
    return(
        <ul className="list-group">
        {tuits.map((tuit) => (
            <li key={tuit._id} className="list-group-item">
              <TuitsItem tuit={tuit} />
              <TuitStats tuit={tuit} />
            </li>
        ))}
      </ul>
    );
   };
   export default HomeTuits;