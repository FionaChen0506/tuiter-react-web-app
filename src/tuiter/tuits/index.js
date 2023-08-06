import React, {useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import TuitsItem from "./tuits-item";
import TuitStats from "./tuits-stats";
import {findTuitsThunk} from "../services/tuits-thunks";

const HomeTuits = () => {
  // const { tuits } = useSelector(state => state.tuits)
  // const dispatch = useDispatch();
  const {tuits, loading} = useSelector(state => state.tuits)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(findTuitsThunk())
  }, [])
  
    return(
      //   <ul className="list-group">
      //     {loading && (
      //     <>
      //       {tuits.map((tuit) => (
      //         <li key={tuit._id} className="list-group-item">
      //           loading...
      //           <TuitsItem tuit={tuit} />
      //           <TuitStats tuit={tuit} />
      //         </li>
      //       ))}
      //     </>
      //   )}
      // </ul>
  
      <ul className="list-group">
      {loading && (
        <li className="list-group-item">
          Loading...
        </li>
      )}
      {!loading && tuits.map(tuit => (
        <li key={tuit._id} className="list-group-item">
          <div>
            <TuitsItem tuit={tuit} />
            <TuitStats tuit={tuit} />
          </div>
        </li>
      ))}
    </ul>

    );
   };
export default HomeTuits;