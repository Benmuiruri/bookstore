import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';
import styles from './AddBook.module.css';

const AddBook = () => {
  const dispatch = useDispatch();
  const authorInputRef = useRef();
  const titleInputRef = useRef();
  const addBookHandler = (event) => {
    event.preventDefault();
    // @ts-ignore
    const enteredAuthor = authorInputRef.current.value;
    // @ts-ignore
    const enteredTitle = titleInputRef.current.value;
    if (enteredAuthor.trim().length === 0 || enteredTitle.trim() === 0) {
      return;
    }
    dispatch(
      // @ts-ignore
      addBook({
        title: enteredAuthor,
        author: enteredTitle,
      }),
    );
    // @ts-ignore
    authorInputRef.current.value = '';
    // @ts-ignore
    titleInputRef.current.value = '';
  };
  return (
    <>
      <h2 className={styles.formHeader}>Add new book</h2>
      <div className={styles.input}>
        <form className={styles.bookForm} onSubmit={addBookHandler}>
          <label htmlFor="author">
            <input
              id="author"
              name="author"
              type="text"
              ref={authorInputRef}
              className={styles.authorInput}
              placeholder="Author"
            />
          </label>
          <label htmlFor="title">
            <input
              id="title"
              name="title"
              type="text"
              ref={titleInputRef}
              className={styles.titleInput}
              placeholder="Title"
            />
          </label>
          <button type="submit" className={styles.formBtn}>Add Book</button>
        </form>
      </div>
    </>
  );
};

export default AddBook;
