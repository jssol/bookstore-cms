import React from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import Form from './Form';
import Book from './Book';

const Books = () => {
  const books = useSelector((state) => state.books, shallowEqual);

  return (
    <main className="w-full h-screen overflow-hidden bg-gray-100 flex flex-col items-center">
      <section className="mt-5 max-h-3/5 w-10/12 flex flex-col items-stretch gap-y-2 overflow-y-auto">
        {books.map((book) => <Book book={book} key={book.id} />)}
      </section>
      <Form />
    </main>
  );
};

export default Books;
