import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllBooks } from '../redux/books/books';
import Book from './Book';

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
