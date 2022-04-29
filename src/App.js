import React from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/calculator' element={<Calculator />} />
        <Route path='/quotes' element={<Quotes />} />
      </Routes>
    </div>
  );
}

export default App;
