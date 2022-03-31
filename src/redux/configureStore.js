import { createStore, combineReducers } from 'redux';
import categoriesReducer from './categories/categories';
import booksReducer from './books/books';

const rootReducer = combineReducers({
  books: booksReducer,
  categories: categoriesReducer,
});

const store = createStore(rootReducer);

export default store;
