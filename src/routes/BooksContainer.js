/* eslint-disable arrow-body-style */
import AddBook from '../components/AddBook';
import BookList from '../components/BooksList';
import styles from './BooksContainer.module.css';

const Books = () => {
  return (
    <>
      <div className={styles.outerContent}>
        <div className={styles.innerContent}>
          <BookList />
          <AddBook />
        </div>
      </div>
    </>
  );
};

export default Books;
