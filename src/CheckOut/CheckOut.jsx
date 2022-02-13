import React from "react";
import { RiStarFill } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { remove_to_basket } from "../redux/Action/action";

const CheckOut = ({ title, price, rating, image, id }) => {
  let dispatch = useDispatch();
  let removeItem = () => {
    dispatch(remove_to_basket(id));
  };
  return (
    <div className="flex flex-wrap justify-center items-center border-2 ">
      <div className="flex justify-center items-center w-4/5">
        <img src={image} alt="" className="w-80 h-80 p-4" />
        <div>
          <h3 className="uppercase pl-3 font-normal">Type:{title}</h3>
          
          <h5 className="pl-3 font-bold ">Price:&#x20B9;{price}</h5>
          <h3 className="font-bold flex pl-3">
            Rating:
            <span className="flex">
              {Array(rating)
                .fill()
                .map((_, index) => (
                  <p key={index}>
                    <RiStarFill className="text-[#FDAA4B] mt-1" />
                  </p>
                ))}
            </span>
          </h3>
          <button
            onClick={removeItem}
            className="bg-black rounded-md p-2 text-white"
          >
            Remove Item
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
