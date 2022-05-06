import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllBooks } from '../redux/books/books';
import Book from './Book';
import styles from './BooksList.module.css';

const BookList = () => {
  // @ts-ignore
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();

  useEffect(() => {
    // @ts-ignore
    dispatch(getAllBooks());
  }, []);

  if (books.length) {
    return (
      <div className={styles.bookListContainer}>
        {books.map((book) => (
          <Book book={book} key={book.id} />
        ))}
      </div>
    );
  }
  return (
    <>
      <p>Please add some books</p>
    </>
  );
};

export default BookList;
