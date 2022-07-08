import React, { FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home } from 'src/Pages/Home/Home';
import { NavBar } from './components/NavBar';
import './App.css';

const App: FC = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
};

export default App;
