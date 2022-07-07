import React, { FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home } from 'src/Pages/Home/Home';
import './App.css';

const App: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

export default App;
