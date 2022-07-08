import React, { useEffect, FC } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from 'src/app/store';
import { CharacterBox } from 'src/components/CharacterBox';
import { getData } from './store/homeSlice';

// interface Props {} <-- this is needed to add props to a component
export const Home: FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(getData());
  });
  return <CharacterBox name="Sanchez" image="" />;
};
