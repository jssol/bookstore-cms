// Action types
const ADDED_BOOK = 'bookstore/books/ADDED_BOOK';
const REMOVED_BOOK = 'bookstore/books/REMOVED_BOOK';
const GOT_BOOKS = 'bookstore/books/GOT_BOOKS';

const apiAppId = 'nHPycyXK8r6FNvXPrYKo';

// Reducer
const initialState = [];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GOT_BOOKS:
    {
      const books = [];
      Object.keys(action.books).forEach((key) => {
        const book = action.books[key][0];
        book.item_id = key;
        book.chapter = {
          number: '',
          name: '',
        };
        book.progress = 0;
        books.push(book);
      });
      return books;
    }
    case ADDED_BOOK:
      return [
        ...state,
        action.book,
      ];
    case REMOVED_BOOK:
      return [
        ...state.filter((book) => book.item_id !== action.book.item_id),
      ];
    default: return state;
  }
};

// Action Creators
const addBook = (book) => ({ type: ADDED_BOOK, book });

const removeBook = (book) => ({ type: REMOVED_BOOK, book });

const getBooks = (books) => ({ type: GOT_BOOKS, books });

// Async Actions
const getBooksFromApi = () => async (dispatch) => {
  await fetch(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${apiAppId}/books`)
    .then((data) => data.json())
    .then((books) => dispatch(getBooks(books)));
};

const addBookToApi = (book) => async (dispatch) => {
  await fetch(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${apiAppId}/books`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(book),
  })
    .then(() => dispatch(addBook(book)));
};

const removeBookFromApi = (book) => async (dispatch) => {
  await fetch(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${apiAppId}/books/${book.item_id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ item_id: book.item_id }),
  })
    .then(() => dispatch(removeBook(book)));
};

export {
  getBooksFromApi, addBookToApi, removeBookFromApi,
};
export default reducer;
