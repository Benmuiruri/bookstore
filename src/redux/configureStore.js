import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import booksReducer, { getAllBooks } from './books/books';
import categoriesReducer from './categories/categories';

const rootReducer = combineReducers({
  books: booksReducer,
  categories: categoriesReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));
store.dispatch(getAllBooks());

export default store;
