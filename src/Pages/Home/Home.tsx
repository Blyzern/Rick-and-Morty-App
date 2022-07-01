import React, { useEffect, FC, InputHTMLAttributes } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from 'src/app/store';
import { getData } from './store/homeSlice';
import { Button } from './styled';

interface props extends InputHTMLAttributes<HTMLInputElement> {} // <-- this is needed to add props to a component

export const Home: React.FC<props> = () => {
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(getData);
  });
  return <Button>Home</Button>;
};
