import React from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';

const Categories = () => {
  const categories = useSelector((state) => state.categories, shallowEqual);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(checkStatus());
  };

  return (
    <main className="w-full h-full flex flex-col items-center justify-center">
      <p className="text-center w-1/3 mx-auto mt-32 text-slate-400">{categories}</p>
      <button className="bg-green-600 mx-auto mt-10 text-white font-bold p-2 rounded-md" type="button" onClick={handleClick}>Check Status</button>
    </main>
  );
};

export default Categories;
