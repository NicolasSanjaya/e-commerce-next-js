import { all, electronics, jewelery, menclothing, womenclothing } from "@/features/categories";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

const Category = () => {
  const dispatch = useDispatch();

  const handleAll = () => {
    dispatch(all());
  };

  const handleElectronics = () => {
    dispatch(electronics());
  };

  const handleJewelery = () => {
    dispatch(jewelery());
  };

  const handleMenClothing = () => {
    dispatch(menclothing());
  };

  const handleWomenClothing = () => {
    dispatch(womenclothing());
  };

  return (
    <div className="flex items-center justify-center gap-4 flex-wrap flex-col">
      <h1 className="text-xl font-bold mt-6">Categories : </h1>
      <div className="flex-col md:flex">
        <ul className="flex flex-col md:flex-row gap-2">
          <li onClick={handleAll} className="bg-violet-500 px-6 py-2 rounded cursor-pointer text-white m-4">
            All
          </li>
          <li onClick={handleElectronics} className="bg-violet-500 px-6 py-2 rounded cursor-pointer text-white m-4">
            Electronics
          </li>
          <li onClick={handleJewelery} className="bg-violet-500 px-6 py-2 rounded cursor-pointer text-white  m-4">
            Jewelery
          </li>
          <li onClick={handleMenClothing} className="bg-violet-500 px-6 py-2 rounded cursor-pointer text-white  m-4">
            Men's Clothing
          </li>
          <li onClick={handleWomenClothing} className="bg-violet-500 px-6 py-2 rounded cursor-pointer text-white  m-4">
            Women's Clothing
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Category;
