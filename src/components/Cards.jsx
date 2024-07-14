import React, { useState } from "react";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

const Cards = ({ item }) => {
  const [isHeartFillted,setIsHeartFillted] = useState(false);

  const handleHeartClick = ()=>{
    setIsHeartFillted(!isHeartFillted)
  }
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
    <div className={`rating gap-1 absolute right-2 top-2 p-4 heartStar bg-green ${isHeartFillted ? "text-rose-500" : "text-white"}`} onClick={handleHeartClick}>
      <FaHeart className="h-5w-5 cursor-pointer"/>
    </div>
      <Link to={`/menu/${item._id}`}>
        <figure>
          <img 
          src={item.image} 
          alt="" 
          className="hover:scale-10s transition-all duration-200 md:h-72"/>
        </figure>
      </Link>
      <div className="card-body">
        <Link to={`/menu/${item._id}`}><h2 className="card-title">{item.name}</h2></Link>
        <p>Discription of item</p>
        <div className="card-actions justify-between items-center mt-2">
          <h5 className="font-semibold">
            <span className="text-sm text-rose-400">$</span>
            {item.price}
          </h5>
          <button className="btn bg-green text-white">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
