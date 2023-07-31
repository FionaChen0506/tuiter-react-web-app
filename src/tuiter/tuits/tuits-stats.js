import React from 'react';
import { FaRegComment } from 'react-icons/fa';
import { useDispatch } from "react-redux";
import { AiOutlineRetweet, AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { FiShare } from "react-icons/fi";

const TuitStats = ({ tuit}) => {
    const dispatch = useDispatch();
    const handleLikeToggle = () => {
        dispatch({ type: 'tuits/toggleLike', payload: { tuitId: tuit._id } });
      };

  return (
    <div className="wd-footer-container">
    <div className="row">
      <div className="col-3">
        <FaRegComment />
        <span className="ms-1">{tuit.replies}</span>
      </div>
      <div className="col-3">
        <AiOutlineRetweet />
        <span className="ms-1">{tuit.retuits}</span>
      </div>
      {/* <div className="col-3">
        {tuit.liked ? <AiFillHeart className='wd-footer-red-heart'/> : <AiOutlineHeart />}
        <span className="ms-1">{tuit.likes}</span>
      </div> */}
        <div className="col-3" onClick={handleLikeToggle}>
          {tuit.liked ? <AiFillHeart className='wd-footer-red-heart'/> : <AiOutlineHeart />}
          <span className="ms-1">{tuit.likes}</span>
        </div>
      <div className="col-3">
        <FiShare />
      </div>
    </div>
    </div>

    
  );
};

export default TuitStats;
