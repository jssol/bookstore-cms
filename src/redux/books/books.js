// Action types
const ADDED_BOOK = 'bookstore/books/ADDED_BOOK';
const REMOVED_BOOK = 'bookstore/books/REMOVED_BOOK';

// Reducer
const reducer = (state = [], action) => {
  switch (action.type) {
    case ADDED_BOOK:
      return [
        ...state,
        {
          title: action.book.title,
          author: action.book.author,
          id: action.book.id,
        },
      ];
    case REMOVED_BOOK:
      return [
        ...state.filter((book) => book.id !== action.book.id),
      ];
    default: return state;
  }
};

// Action Creators
const addBook = (book) => ({ type: ADDED_BOOK, book });

const removeBook = (book) => ({ type: REMOVED_BOOK, book });

export { addBook, removeBook };
export default reducer;
