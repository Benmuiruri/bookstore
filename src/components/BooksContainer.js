/* eslint-disable arrow-body-style */
import styles from './BooksContainer.module.css';
import Book from './Book';

const Books = () => {
  return (
    <>
      <div className={styles.innerContent}>
        <div>
          <ul>
            <Book />
          </ul>
        </div>
        <form>
          <label htmlFor="title">
            Book Title
            <input
              id="title"
              name="title"
              type="text"
              placeholder="Enter Book Title..."
            />
          </label>
          <label htmlFor="author">
            Author
            <input
              id="author"
              name="author"
              type="text"
              placeholder="Enter Author Name..."
            />
          </label>
          <button type="submit">Add Book</button>
        </form>
      </div>
    </>
  );
};

export default Books;
