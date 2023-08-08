import React from "react";
import tuitsArray from './tuits.json';
const TuitSummaryItem = (
 {
   tuit = {
     "topic": "hahahha",
     "userName": "adfdasdfX",
     "time": "2h",
     "title": `Tesla CyberTruck lands on Mars and
               picks up the Curiosity rover on its 6' bed`,
     "image": "tuit-image1.jpg"
   }
 }
) => {
 return(
  <li className="list-group-item">
   <div className="row">
     <div className="col-10">
       <div>{tuit.handle} · {tuit.time}</div>
       <div className="fw-bolder">{tuit.topic}</div>
       <div>{tuit.title}</div>
     </div>
     <div className="col-2">
       <img width={70} className="float-end rounded-3" src={`/images/${tuit.image}`}/>
     </div>
   </div>
  </li>
 );
};
export default TuitSummaryItem;