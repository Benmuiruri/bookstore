import { v4 as uuidv4 } from 'uuid';

const BOOK_ADDED = 'bookstore/books/BOOK_ADDED';
const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const DELETE_BOOK = 'bookstore/books/DELETE_BOOK';
const ALL_BOOKS = 'bookstore/books/ALL_BOOKS';

const initialState = [
  { title: 'book one', author: 'ben' },
  { title: 'book two', author: 'Nick' },
];

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ALL_BOOKS:
      return action.payload.books;
    case BOOK_ADDED:
      return state.concat({
        id: uuidv4(),
        ...action.payload.data,
      });
    case DELETE_BOOK:
      return state.filter((book) => book.id !== action.payload.id);
    default:
      return state;
  }
}

export const bookAdded = (book) => ({
  type: ADD_BOOK,
  payload: {
    book,
  },
});

export const addBook = (data) => (dispatch) => {
  const book = {
    id: uuidv4(),
    tittle: data.title,
    author: data.author,
  };
  const appID = '112RUYcPxo5o5IigoEGI';
  const URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi';
  const endPoint = `${URL}/apps/${appID}/books/`;

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(book),
  };

  fetch(endPoint, options).then((res) => {
    if (res.status === 201) {
      dispatch(bookAdded(book));
    }
  });
};

export const deleteBook = (id) => ({
  type: DELETE_BOOK,
  payload: {
    id,
  },
});

const allBooks = (books) => ({
  type: ALL_BOOKS,
  payload: {
    books,
  },
});

export const getAllBooks = () => (dispatch) => {
  const appID = '112RUYcPxo5o5IigoEGI';
  const URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi';
  const endPoint = `${URL}/apps/${appID}/books/`;

  fetch(endPoint)
    .then((res) => res.json())
    .then((books) => {
      const booksList = Object.keys(books).map((bookID) => ({
        id: bookID,
        ...books[bookID][0],
      }));
      dispatch(allBooks(booksList));
    });
};
