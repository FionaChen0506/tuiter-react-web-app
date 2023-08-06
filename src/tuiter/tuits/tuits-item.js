import React from "react";
import "./style.css"
import {deleteTuitThunk} from "../services/tuits-thunks";
import { FaCertificate, FaCheck} from "react-icons/fa";
import {useDispatch} from "react-redux";
//import { deleteTuit } from "../reducers/tuits-reducer";
import {HiX} from 'react-icons/hi';
import TuitStats from "./tuits-stats";
const TuitsItem = (
 { tuit }
) => {
const dispatch = useDispatch();
const deleteTuitHandler = (id) => {
    //dispatch(deleteTuit(id));
    dispatch(deleteTuitThunk(id));
}
 return(
  //<li className="list-group-item">
   <div className="row">
    <div className="col-1">
       <img width={56} className="float-start rounded-circle" src={`/images/${tuit.image}`}/>
     </div>
     <div className="col-11">
        <div>
        <HiX className="bi bi-x-lg float-end" onClick={() => deleteTuitHandler(tuit._id)} />
            <span className="wd-post__author">{tuit.username}</span>
            {/* if using json file, the username is userName */}
            <div class="wd-post__combined-icon">
            <FaCheck className="wd-post__check-icon text-white" />
            <FaCertificate className="wd-post__certificate-icon text-primary" />
            </div>
            <span className="wd-post__author-account">{tuit.handle} · {tuit.time}</span>
        </div>
       <div className="wd-post__body">{tuit.tuit}</div>
       {/* <TuitStats key={tuit._id} tuit={tuit}/> */}
     </div>
   </div>
  //</li>
 );
};
export default TuitsItem;