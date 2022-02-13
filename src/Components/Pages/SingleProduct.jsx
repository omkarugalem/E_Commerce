import React from "react";
import { useParams } from "react-router-dom";
import ProductData from "../../Utilities/ProductData.json";
import { useDispatch } from "react-redux";
import { add_to_basket } from "../../redux/Action/action";
import { RiStarFill } from "react-icons/ri";
import { BsBasket } from "react-icons/bs";

const SingleProduct = () => {
  let { id } = useParams();
  let dispatch = useDispatch();
  let singleprct = ProductData.find(item => item.id === id);

  let onAddItemToBasket = () => {
    let item = {
      id: singleprct.id,
      title: singleprct.title,
      price: singleprct.price,
      rating: singleprct.price.rating,
      detail: singleprct.detail,
      specification: singleprct.specification,
    };
    dispatch(add_to_basket(item));
  };
  return (
    // <section className="w-full p flex">
    //   <figure>
    //     <img
    //       src={singleprct.image}
    //       alt="img"
    //       className="w-full h-[625px] flex justify-center"
    //     />
    //   </figure>
    //   <main className="bg-white w-2/3 h-[700px]">
    //     <div className="9-10 uppercase flex">
    //       <span className="pl-2 font-bold text-2xl">{singleprct.title}</span>
    //     </div>
    //     <p className="pl-10">
    //       Price:<strong>{singleprct.price}K</strong>
    //     </p>
    //     <div className="pl-10 pt-10">
    //       <h4 className="uppercase text-xl"> Specifications :</h4>
    //       {singleprct.specification &&
    //         singleprct.specification.map((item, index) => {
    //           <li key={index} className="mt-2">
    //             {item}
    //           </li>;
    //         })}
    //     </div>
    //     <div className="pl-10 pt-10">
    //       <h4 className="uppercase text-xl"> Details :</h4>
    //       <p>{singleprct.detail}</p>
    //     </div>
    //     <div className="pl-10 pt-10">
    //       <button
    //         onClick={onAddItemToBasket}
    //         className="bg-orange-500 p-2 text-black rounded-md"
    //       >
    //         Add to Basket
    //       </button>
    //     </div>
    //   </main>
    // </section>

    <section className="bg-white p-10">
      <article className="mx-auto w-[95%]">
        <main className="flex space-x-6 ">
          <div className="basis-[30%]">
            <img src={singleprct.image} alt="img" />
          </div>
          <div className="basis-[70%] flex flex-col justify-evenly">
            <div>
              <h2>{singleprct.title}</h2>
            </div>
            {/* <div className="flex">
              <h4>Rating:</h4>
              {Array(rating)
                .fill()
                .map((_, index) => (
                  <p key={index}>
                    <RiStarFill className="text-[#FDAA4B] mt-1" />
                  </p>
                ))}
            </div> */}
            <div>
              Price: <strong>&#x20B9;{singleprct.price}</strong>
            </div>
            <div>
              <h4>Specification:</h4>
              {singleprct.specification.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </div>
            <div>
              <h4>Details:</h4>
              <p>{singleprct.detail}</p>
            </div>
            <div>
              <button
                className="bg-[#FDAA4B] px-4 py-4 flex justify-end rounded-md hover:bg-yellow-600"
                onClick={onAddItemToBasket}
              >
                <span>
                  <BsBasket />
                </span>
                <span className="pl-2">Add to basket</span>
              </button>
            </div>
          </div>
        </main>
      </article>
    </section>
  );
};

export default SingleProduct;
