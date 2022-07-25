import React, { FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Char } from 'src/Pages/Home/Char';
import { NavBar } from './components/NavBar';
import './App.css';

const App: FC = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Char />} />
      </Routes>
    </>
  );
};

export default App;
