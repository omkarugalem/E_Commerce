import React from "react";
import { BsBasket } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { add_to_basket } from "./../../redux/Action/action";
import { RiStarFill } from "react-icons/ri";

const DataSend = props => {
  let dispatch = useDispatch();
  let { title, price, rating, image, id } = props.productDetails;

  let onAddItemToBasket = () => {
    let item = {
      title,
      price,
      image,
      rating,
    };
    dispatch(add_to_basket(item));
  };
  return (
    <div className="flex space-x-6 basis-[70%]">
      <div className="border-gray-200 border-[1px] justify-center items-center">
        <img src={image} alt="img" className="h-52 p-3" />
        <Link to={`/product/${id}`}>
          <h3 className="uppercase pl-3 font-normal">Type:{title}</h3>
        </Link>
        <h5 className="pl-3 font-bold ">Price:&#x20B9;{price}</h5>
        {/* <h6 className="uppercase pl-3">Rating:{rating}</h6> */}
        <div>
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
        </div>
        {/* <button
          className="border-[2px] bg-orange-500 p-3 hover:bg-orange-900 text-white"
          onClick={onAddItemToBasket}
        >
          Add to Cart
        </button> */}
        <div className="">
          <button
            className="bg-[#FDAA4B] px-2 py-2 flex justify-end rounded-md hover:bg-yellow-600 shadow-lg"
            onClick={onAddItemToBasket}
          >
            <span className="pt-1">
              <BsBasket />
            </span>
            <span className="pl-2">Add to basket</span>
          </button>
        </div>
      </div>
    </div>

    // <div className="flex space-x-6 basis-[70%] ">
    //   <div className=" p-3 border-[1px] shadow-lg flex flex-col justify-end">
    //     <div>
    //       <Link to={`/product/${id}`}>
    //         <img src={image} alt="shirt" className="p-3 h-80  w-[100%]" />
    //       </Link>
    //     </div>
    //     <div>
    //       <Link to={`/products/${id}`}>
    //         <h2 className="uppercase font-normal justify-start">{title}</h2>
    //       </Link>
    //     </div>
    //     <div>
    //       <h3 className=" font-bold">Price:&#x20B9;{price}</h3>
    //     </div>
    //     <div>
    //       <h3 className=" flex font-bold">
    //         Rating:
    //         <span className="flex">
    //           {Array(rating)
    //             .fill()
    //             .map((_, index) => (
    //               <p key={index}>
    //                 <RiStarFill className="text-[#FDAA4B] mt-1" />
    //               </p>
    //             ))}
    //         </span>
    //       </h3>
    //     </div>
    //     <div className="">
    //       <button
    //         className="bg-[#FDAA4B] px-2 py-2 flex justify-end rounded-md hover:bg-yellow-600 shadow-lg"
    //         onClick={onAddItemToBasket}
    //       >
    //         <span className="pt-1">
    //           <BsBasket />
    //         </span>
    //         <span className="pl-2">Add to basket</span>
    //       </button>
    //     </div>
    //   </div>
    // </div>
  );
};

export default DataSend;
