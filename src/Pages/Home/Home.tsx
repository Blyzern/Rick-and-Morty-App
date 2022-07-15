import React, { useEffect, FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from 'src/app/store';
import { CharacterBox } from 'src/components/CharacterBox';
import { characterSelector } from './store/homeSelectors';
import { getData } from './store/homeSlice';
import { CharDataTypes } from './store/homeSlice.interface';
import { PageWrapper, ComponentWrapper } from './styled';

export const Home: FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const characters: [CharDataTypes] = useSelector(characterSelector);
  console.log('🚀 ~ file: Home.tsx ~ line 13 ~ characters', characters);
  useEffect(() => {
    dispatch(getData());
  }, []);
  return (
    <PageWrapper>
      <ComponentWrapper>
        {characters.map(({ id, name, image, status, location, species }) => (
          <CharacterBox
            key={id}
            name={name}
            image={image}
            status={status}
            species={species}
            location={location}
          />
        ))}
      </ComponentWrapper>
    </PageWrapper>
  );
};
