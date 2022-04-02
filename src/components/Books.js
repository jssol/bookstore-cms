import React, { useEffect } from 'react';
import { shallowEqual, useSelector, useDispatch } from 'react-redux';
import { getBooksFromApi } from '../redux/books/books';
import Form from './Form';
import Book from './Book';

document.addEventListener('DOMContentLoaded', () => {

});

const Books = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBooksFromApi());
  }, []);
  const books = useSelector((state) => state.books, shallowEqual);

  return (
    <main className="w-full h-screen overflow-hidden bg-gray-100 flex flex-col items-center">
      <section className="mt-5 max-h-3/5 w-10/12 flex flex-col items-stretch gap-y-2 overflow-y-auto">
        {books.map((book) => <Book book={book} key={book.item_id} />)}
      </section>
      <Form />
    </main>
  );
};

export default Books;
