import React, { useEffect, FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from 'src/app/store';
import { CharacterBox } from 'src/components/CharacterBox';
import SyncLoader from 'react-spinners/SyncLoader';
import {
  characterSelector,
  linkSelector,
  isLoadingSelector,
} from './store/charSelectors';
import { getData } from './store/charSlice';
import { CharDataTypes } from './store/charSlice.interface';
import { PageWrapper, ComponentWrapper, Spacer } from './styled';

export const Char: FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const characters: [CharDataTypes] = useSelector(characterSelector);
  const isLoading: boolean = useSelector(isLoadingSelector);
  const link: string = useSelector(linkSelector);
  useEffect(() => {
    dispatch(getData());
  }, [link]);
  return isLoading === true ? (
    <PageWrapper>
      <SyncLoader color="#16A480" loading={isLoading} size={50} />
    </PageWrapper>
  ) : (
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
