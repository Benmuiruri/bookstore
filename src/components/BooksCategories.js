import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';
import styles from './BooksCategories.module.css';

const BookCategories = () => {
  // @ts-ignore
  const status = useSelector((store) => store.categories);
  const dispatch = useDispatch();
  return (
    <div className={styles.innerContent}>
      <button
        type="button"
        onClick={() => {
          dispatch(checkStatus());
        }}
      >
        Check status
      </button>
      {status}
    </div>
  );
};

export default BookCategories;
