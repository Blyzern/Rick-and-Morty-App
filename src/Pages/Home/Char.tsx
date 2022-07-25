import React, { useEffect, FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from 'src/app/store';
import { CharacterBox } from 'src/components/CharacterBox';
import { characterSelector } from './store/charSelectors';
import { getData } from './store/charSlice';
import { CharDataTypes } from './store/charSlice.interface';
import { PageWrapper, ComponentWrapper, Spacer } from './styled';

export const Char: FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const characters: [CharDataTypes] = useSelector(characterSelector);
  console.log('🚀 ~ file: Home.tsx ~ line 13 ~ characters', characters);
  useEffect(() => {
    dispatch(getData());
  }, []);
  return (
    <PageWrapper>
      <Spacer />
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
