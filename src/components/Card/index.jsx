import { increment } from "@/features/count";
import { increment as increment2 } from "@/features/cart";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

const Card = (props) => {
  const { id, image, title = "dummy", category, description = "lorem10", price = 0 } = props;
  const dispatch = useDispatch();
  const datas = useSelector((state) => state.cart.cart);

  const handleAddToCart = (product) => {
    dispatch(increment());
    dispatch(increment2(product));
  };

  return (
    <div className="max-w-xs bg-violet-600 rounded p-6 m-6 text-white h-[600px] flex flex-col justify-between">
      <div key={id}>
        <img src={image} alt={title} className="h-[300px] w-full object-cover" />
        <h2 className="font-bold text-2xl my-4">{title.substring(0, 20)}...</h2>
        <h4>Category : {category}</h4>
        <p>{description.substring(0, 40)}...</p>
        <p>{price.toLocaleString("en-US", { style: "currency", currency: "USD" })}</p>
      </div>
      <div>
        <button onClick={() => handleAddToCart(props)} className="w-full py-2 bg-blue-500 rounded mt-4 hover:bg-blue-700">
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default Card;
