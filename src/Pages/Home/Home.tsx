import React, { useEffect, FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from 'src/app/store';
import { CharacterBox } from 'src/components/CharacterBox';
import { characterSelector } from './store/homeSelectors';
import { getData } from './store/homeSlice';
import { PageWrapper, ComponentWrapper } from './styled';

interface props {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: object;
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: [];
  url: string;
  created: string;
}

export const Home: FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const characters: [props] = useSelector(characterSelector);
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
            location={location.name}
          />
        ))}
      </ComponentWrapper>
    </PageWrapper>
  );
};
