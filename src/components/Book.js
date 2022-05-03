/* eslint-disable */
import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteBook } from '../redux/books/books';

const Book = ({ book }) => {
  const dispatch = useDispatch();
  return (
    <li>
      {book.title}
      {' by '}
      {book.author}
      <button
        type='button'
        onClick={() => {
          dispatch(deleteBook(book.id));
        }}
      >
        Remove
      </button>
    </li>
  );
}

export default Book;
