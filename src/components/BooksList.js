import { useSelector } from 'react-redux';
import Book from './Book';

const BookList = () => {
  // @ts-ignore
  const books = useSelector((state) => state.books);
  if (books.length) {
    return (
      <ul>
        {books.map((book) => (
          <Book book={book} key={book.id} />
        ))}
      </ul>
    );
  }
  return (
    <>
      <p>Please add some books</p>
    </>
  );
};

export default BookList;
