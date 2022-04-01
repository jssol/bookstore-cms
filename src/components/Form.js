import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/books';

const book = {
  author: '',
  title: '',
  categorie: 'Unknown',
  progress: '0',
  chapter: {
    number: 'Chapter 0',
    name: 'Introduction',
  },
  id: uuidv4(),
};

const Form = () => {
  const [state, setState] = useState(book);
  const dispatch = useDispatch();

  const { author, title } = state;

  const handleChange = (e) => {
    setState((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addBook(state));
  };

  return (
    <section className="absolute self-center mx-auto w-10/12 bottom-0 pt-4 mb-12 border-t-2 border-slate-200">
      <h2 className="text-slate-500 text-xl font-bold mb-2">ADD NEW BOOK</h2>
      <form className="w-full h-10 flex items-stretch justfiy-between">
        <input className="w-3/5 p-3 rounded-md text-slate-600 transition-all h-full block outline-1 outline-blue-100 focus:outline-blue-300" type="text" name="title" onChange={handleChange} placeholder="Book title" value={title} />
        <input className="w-1/3 p-3 rounded-md text-slate-600 transition-all h-full block ml-4 outline-blue-100 focus:outline-blue-300" type="text" name="author" onChange={handleChange} placeholder="Author" value={author} />
        <button className="w-1/5 p-3 flex items-center justify-center rounded-md h-full block bg-blue-600 text-white font-semibold ml-4" type="submit" onClick={handleSubmit}>ADD BOOK</button>
      </form>
    </section>
  );
};

export default Form;
