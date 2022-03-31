// Action types
const ADDED_BOOK   = 'bookstore/books/ADDED_BOOK';
const REMOVED_BOOK = 'bookstore/books/REMOVED_BOOK';

// Reducer
const reducer = (state = [], action) => {
  switch (action.type) {
    case ADDED_BOOK:
      return [
        ...state,
        {
          title: payload.title,
          author: payload.author,
          id: payload.id
        }
      ]
    case REMOVED_BOOK:
      return [
        ...state.filter((book) => book.id !== payload.id)
      ]
    default: return state;
  }
};

// Action Creators
const addBook = (book) => {
  return { type: ADDED_BOOK, payload: book };
};

const removeBook = (book) => {
  return { type: REMOVED_BOOK, payload: book };
};

export { addBook, removeBook };
export default reducer;
