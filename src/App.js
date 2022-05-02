import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/UI/Navigation';
import Books from './components/redux/books/Book';
import BookCategories from './components/redux/categories/BookCategories';

function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<Books title="Ben" author="Ten" />} />
        <Route path="/categories" element={<BookCategories />} />
      </Routes>
    </div>
  );
}

export default App;
