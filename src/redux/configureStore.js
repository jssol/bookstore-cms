import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import categoriesReducer from './categories/categories';
import booksReducer from './books/books';
import visibilityReducer from './filter/filter';

const rootReducer = combineReducers({
  books: booksReducer,
  categories: categoriesReducer,
  visibility: visibilityReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
