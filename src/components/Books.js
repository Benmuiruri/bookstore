/* eslint-disable arrow-body-style */
import styles from './Books.module.css';

const Books = () => {
  return (
    <>
      <div className={styles.innerContent}>
        <div>
          <ul>
            <li>
              Book One by Ben
              {' '}
              <button type="button">Delete Book</button>
            </li>
            <li>
              Book Two by Monica
              {' '}
              <button type="button">Delete Book</button>
            </li>
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
            Email
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
