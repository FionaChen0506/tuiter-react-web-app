import React from 'react';
import { FaRegComment, FaHeart} from 'react-icons/fa';
import { useDispatch } from "react-redux";
import { AiOutlineRetweet, AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { FiShare, FiThumbsDown } from "react-icons/fi";
import { updateTuitThunk } from "../services/tuits-thunks";
import {PiThumbsDownDuotone, PiThumbsDownFill} from "react-icons/pi"


const TuitStats = ({ tuit}) => {
    const dispatch = useDispatch();
    // const handleLikeToggle = () => {
    //     dispatch({ type: 'tuits/toggleLike', payload: { tuitId: tuit._id } });
    //   };
    const handleLikeToggle = () => {
      const updatedTuit = {
          ...tuit,
          liked : true,
          likes : tuit.likes + 1,
      };
      dispatch(updateTuitThunk(updatedTuit))
  }
  const handleDislikeToggle = () => {
    const updatedTuit = {
        ...tuit,
        disliked : true,
        dislikes : tuit.dislikes + 1,
    };
    dispatch(updateTuitThunk(updatedTuit))
}

  return (
    <div className="wd-footer-container">
    <div className="row">
      <div className="col-2">
        <FaRegComment />
        <span className="ms-1">{tuit.replies}</span>
      </div>
      <div className="col-2">
        <AiOutlineRetweet className="ms-2"/>
        <span className="ms-1">{tuit.retuits}</span>
      </div>
        
        {/* <div className="col-3" onClick={handleLikeToggle}>
          {tuit.liked ? <AiFillHeart className='wd-footer-red-heart'/> : <AiOutlineHeart />}
          <span className="ms-1">{tuit.likes}</span>
        </div> */}

          <div className="col-2" onClick={handleLikeToggle}>
                {tuit.liked && <AiFillHeart className='wd-footer-red-heart'/>}
                {!tuit.liked && <AiOutlineHeart />}
                {/* <FaHeart
                  className="text-danger ms-3"
                  onClick={() =>
                    dispatch(updateTuitThunk({ ...tuit, likes: tuit.likes + 1 }))
                  }
                />  */}
                <span className="ms-1">{tuit.likes}</span>
          </div>

          {/* <button className="col text-secondary border-0 bg-transparent text-start" onClick={()}>
                    {tuit.liked && <AiFillHeart/>}
                    {!tuit.liked && <AiOutlineHeart />}
                    <span>{tuit.likes}</span>
          </button>
       */}
      <div className="col-2" onClick={handleDislikeToggle}>
        {/* <FiThumbsDown className="ms-3"
            onClick={() =>
              dispatch(updateTuitThunk({ ...tuit, dislikes: tuit.dislikes + 1 }))
            }
        />  */}

        {tuit.disliked && <PiThumbsDownFill />}
        {!tuit.disliked && <PiThumbsDownDuotone/>}
        <span className="ms-1">{tuit.dislikes}</span>
      </div>


      <div className="col-3">
        <FiShare className="ms-1"/>
      </div>
    </div>
    </div>

    
  );
};

export default TuitStats;
