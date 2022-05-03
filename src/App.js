// @ts-nocheck
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/UI/Navigation';
import Books from './routes/BooksContainer';
import BookCategories from './components/BooksCategories';

function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/categories" element={<BookCategories />} />
      </Routes>
    </div>
  );
}

export default App;
