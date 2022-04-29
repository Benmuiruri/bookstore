import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Books from './components/Books';
import BookCategories from './components/BookCategories';

import './App.css';

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
