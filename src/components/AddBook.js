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
      <h2>Add new book</h2>
      <div className={styles.input}>
        <form onSubmit={addBookHandler}>
          <label htmlFor="author">
            Author
            <input
              id="author"
              name="author"
              type="text"
              ref={authorInputRef}
              placeholder="Author..."
            />
          </label>
          <label htmlFor="title">
            Title
            <input
              id="title"
              name="title"
              type="text"
              ref={titleInputRef}
              placeholder="Title..."
            />
          </label>
          <button type="submit">Add User</button>
        </form>
      </div>
    </>
  );
};

export default AddBook;
