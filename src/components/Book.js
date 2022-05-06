/* eslint-disable */
import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteBook } from '../redux/books/books';
import styles from './Book.module.css';

const Book = ({ book }) => {
  const dispatch = useDispatch();
  return (
    <>
      <div className={styles.bookDivContainer}>
        <div className={styles.bookDiv}>
          <div className={styles.bookDetails}>
            <span className={styles.category}> Action</span>
            <h2 className={styles.author}>{book.author}</h2>
            <h3 className={styles.title}>{book.title}</h3>

            <div className={styles.buttons}>
              <button type='button' className={styles.btnBook}>
                Comments
              </button>
              <button
                type='button'
                className={styles.btnBook}
                onClick={() => {
                  // @ts-ignore
                  dispatch(deleteBook(book.id));
                }}
              >
                Delete
              </button>
              <button type='button' className={styles.btnBook}>
                Edit
              </button>
            </div>
          </div>
          <div className={styles.completionStatus}>
            <svg
              className={styles.greyBar}
              fill='none'
              stroke='currentColor'
              strokeWidth='7'
              viewBox='0 0 100 100'
            >
              <path
                className={styles.blueBar}
                strokeDasharray='250,0'
                d='M50 10a40 40 0 0 1 0 80 40 40 0 0 1 0-80'
              />
              <path
                className='text-blue-500'
                strokeDasharray='180,180'
                d='M50 10a40 40 0 0 1 0 80 40 40 0 0 1 0-80'
              />
            </svg>
            <div className={styles.completedStats}>
              <p className={styles.completedPercentage}>75%</p>
              <p className={styles.completedText}>Completed</p>
            </div>
          </div>
          <div className={styles.chapterInfo}>
            <p className={styles.currentChapter}>current chapter</p>
            <p className={styles.chapterNo}>Chapter 1</p>
            <button type='button' className={styles.btnChapter}>
              Update progess
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Book;
