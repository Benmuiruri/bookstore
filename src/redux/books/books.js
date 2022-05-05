/* eslint-disable no-use-before-define */
import { v4 as uuidv4 } from 'uuid';

const URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi';
const appID = 'B1p4fGLO1yhl4WoADONx';
const endPoint = `${URL}/apps/${appID}/books/`;

const BOOK_ADDED = 'bookstore/books/ADDED';
const BOOK_DELETED = 'bookstore/books/DELETED';
const GET_BOOKS = 'bookstore/books/GET_BOOKS';

export default function reducer(state = [], action) {
  switch (action.type) {
    case GET_BOOKS:
      return action.payload.books;
    case BOOK_ADDED:
      return state.concat({
        id: action.payload.book.item_id,
        title: action.payload.book.title,
        author: action.payload.book.author,
        category: action.payload.book.category,
      });
    case BOOK_DELETED:
      return state.filter((book) => book.id !== action.payload.id);
    default:
      return state;
  }
}

const bookAdded = (book) => ({
  type: BOOK_ADDED,
  payload: {
    book,
  },
});

export const addBook = (data) => (dispatch) => {
  const book = {
    item_id: uuidv4(),
    title: data.title,
    author: data.author,
    category: '',
  };

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(book),
  };

  fetch(endPoint, options).then((res) => {
    if (res.status === 201) dispatch(bookAdded(book));
  });
};

export const bookDeleted = (id) => ({
  type: BOOK_DELETED,
  payload: {
    id,
  },
});

export const deleteBook = (id) => (dispatch) => {
  const options = {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      book_id: id,
    }),
  };

  fetch(`${endPoint}${id}`, options).then((res) => {
    if (res.status === 201) dispatch(bookDeleted(id));
  });
};

const getBooks = (books) => ({
  type: GET_BOOKS,
  payload: {
    books,
  },
});

export const getAllBooks = () => (dispatch) => {
  fetch(endPoint)
    .then((res) => res.json())
    .then((books) => {
      const booksList = Object.keys(books).map((bookID) => ({
        id: bookID,
        ...books[bookID][0],
      }));
      dispatch(getBooks(booksList));
    });
};
