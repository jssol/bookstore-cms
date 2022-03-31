import { createStore, combineReducers } from 'redux';
import categoriesReducer from './categories/categories';
import booksReducer from './books/books';
import visibilityReducer from './filter/filter';

const rootReducer = combineReducers({
  books: booksReducer,
  categories: categoriesReducer,
  visibility: visibilityReducer,
});

const store = createStore(rootReducer);

export default store;
