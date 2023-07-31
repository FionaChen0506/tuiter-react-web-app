import {createTuit} from "./reducers/tuits-reducer";
import {useDispatch} from "react-redux";
import React, {useState} from "react";
// Import the required icon components
import { AiOutlinePicture } from 'react-icons/ai';
// import { HiOutlineGif } from 'react-icons/hi';
import { MdFormatListBulleted } from 'react-icons/md';
import { BsEmojiSmile, BsFiletypeGif} from 'react-icons/bs';
// (Note: 'TbCalendarStats' seems to be a custom icon, make sure you have its correct import statement.)
// import { TbCalendarStats } from 'path/to/custom-icon-library';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { BiBold, BiItalic } from 'react-icons/bi';



const WhatsHappening = () => {
 let [whatsHappening, setWhatsHappening] = useState('');
 const dispatch = useDispatch();
 const tuitClickHandler = () => {
   const newTuit = {
     tuit: whatsHappening
   }
   dispatch(createTuit(newTuit));
   setWhatsHappening("");
 }
 return (
   <div className="row">
     <div className="col-auto">
       <img src="/images/tuit-image5.jpg" className="rounded-circle" width={56}/>
     </div>
     <div className="col-10">
       <textarea value={whatsHappening} placeholder="What's happening?"
               className="form-control border-0"
               onChange={(event) => setWhatsHappening(event.target.value)}>
       </textarea>
       <div>
         <button className="rounded-pill btn btn-primary float-end mt-2 ps-3 pe-3 fw-bold"
                 onClick={tuitClickHandler}>
           Tuit
         </button>
         <div className="text-primary fs-2">
         <AiOutlinePicture className="me-3" />
         <BsFiletypeGif className="me-3" />
        {/* <HiOutlineGif className="me-3" /> */}
        <MdFormatListBulleted className="me-3" />
        <BsEmojiSmile className="me-3" />
        {/* <TbCalendarStats className="me-3" /> */}
        <HiOutlineLocationMarker className="me-3" />
        <BiBold className="me-3" />
        <BiItalic className="me-3" />
         </div>
       </div>
     </div>
     <div className="col-12"><hr/></div>
   </div>
 );
}
export default WhatsHappening;