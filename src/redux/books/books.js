import { v4 as uuidv4 } from 'uuid';

// Action types
const ADDED_BOOK = 'bookstore/books/ADDED_BOOK';
const REMOVED_BOOK = 'bookstore/books/REMOVED_BOOK';

// Reducer
const initialState = [
  {
    author: 'Frank Herbert',
    title: 'Dune',
    categorie: 'Science Fiction',
    progress: '8',
    chapter: {
      number: 'Chapter 3:',
      name: '"A Lesson Learned"',
    },
    id: uuidv4(),
  },
  {
    author: 'Suzanne Collins',
    title: 'The Hunger Games',
    categorie: 'Action',
    progress: '64',
    chapter: {
      number: 'Chapter 17',
      name: '',
    },
    id: uuidv4(),
  },
];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDED_BOOK:
      return [
        ...state,
        {
          author: action.book.author,
          title: action.book.title,
          categorie: action.book.categorie,
          progress: action.book.progress,
          chapter: action.book.chapter,
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
