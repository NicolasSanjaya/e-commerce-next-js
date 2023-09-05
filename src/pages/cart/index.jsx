import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { plus, minus, remove } from "@/features/cart";

const CartPage = () => {
  const router = useRouter();
  console.log(router);
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();
  useEffect(() => {
    console.log(cart);
  }, [cart]);

  const getTotal = () => {
    let totalQuantity = 0;
    let totalPrice = 0;
    cart.forEach((item) => {
      totalQuantity += item.cartQuantity;
      totalPrice += item.price * item.cartQuantity;
    });
    return { totalPrice, totalQuantity };
  };

  return (
    <div className="bg-violet-300 min-h-screen">
      <div className="flex items-center">
        <div className="flex items-center justify-start my-auto">
          <button onClick={() => router.push("/")}>
            <AiOutlineArrowLeft className="scale-150 ml-6" />
          </button>
        </div>
        <div className="flex justify-center items-center mx-auto">
          <h1 className="text-6xl drop-shadow-md font-extrabold text-indigo-400 text-center">Cart</h1>
        </div>
      </div>
      <div className="p-6 m-6 flex">
        {cart.map((item) => (
          <div key={item.id} className="w-full flex flex-wrap justify-between m-6 border border-black rounded-md max-w-xs">
            <div className="mx-auto">
              <img src={item.image} alt={item.title} className="h-[200px]" />
            </div>
            <div className="mx-auto">
              <h2 className="text-center text-2xl font-bold">{item.title}</h2>
              <div className="flex items-end justify-center mt-4">
                <button onClick={() => dispatch(minus(item.id))} className="px-4 py-1 bg-yellow-300 rounded-md text-xl font-bold">
                  -
                </button>
                <span className="font-bold text-2xl mx-4">{item.cartQuantity}</span>
                <button onClick={() => dispatch(plus(item.id))} className="px-4 py-1 bg-yellow-300 rounded-md text-xl font-bold">
                  +
                </button>
              </div>
              <button onClick={() => dispatch(remove(item.id))} className="flex justify-center bg-red-500 px-6 py-2 rounded text-white mx-auto my-4">Remove</button>
              <span className="flex justify-center items-end text-xl font-bold mt-4">{(item.price * item.cartQuantity).toLocaleString("en-US", { style: "currency", currency: "USD" })}</span>
            </div>
          </div>
        ))}
        <span className="font-extrabold text-2xl fixed bottom-5">Total Price : {getTotal().totalPrice.toLocaleString("en-US", { style: "currency", currency: "USD" })}</span>
      </div>
    </div>
  );
};

export default CartPage;
