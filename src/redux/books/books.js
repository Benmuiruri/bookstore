const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const DELETE_BOOK = 'bookstore/books/DELETE_BOOK';

const initialState = [];

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_BOOK:
      return state.concat({
        ...action.payload.data,
      });
    case DELETE_BOOK:
      return state.filter((book) => book.id !== action.payload.id);
    default:
      return state;
  }
}

export const addBook = (data) => ({
  type: ADD_BOOK,
  payload: {
    data,
  },
});

export const deleteBook = (id) => ({
  type: ADD_BOOK,
  payload: {
    id,
  },
});
