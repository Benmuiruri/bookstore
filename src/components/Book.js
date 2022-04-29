/* eslint-disable react/prop-types */

const Book = ({ title, author }) => (
  <li>
    <h4>
      {title}
      {' '}
      by
      {' '}
      {author}
    </h4>
    <button type="button">Delete Book</button>
  </li>
);

export default Book;
