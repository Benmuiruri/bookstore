/* eslint-disable react/prop-types */
import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteBook } from '../redux/books/books';
// import styles from './Book.module.css';

const Book = ({ book }) => {
  const dispatch = useDispatch();
  return (
    <>
      <li key={book.id}>
        {book.title}
        {' by '}
        {book.author}
        <button
          type="button"
          onClick={() => {
            // @ts-ignore
            dispatch(deleteBook(book.id));
          }}
        >
          Delete Book
        </button>
      </li>
    </>
  );
};

export default Book;
