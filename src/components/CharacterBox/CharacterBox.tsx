import React, { FC } from 'react';
import { CharDataTypes } from 'src/Pages/Home/store/homeSlice.interface';
import {
  Wrapper,
  Image,
  InfoWrapper,
  CharacterName,
  Caption,
  CharacterInfo,
} from './styled';

export const CharacterBox: FC<CharDataTypes> = ({
  name,
  image,
  status,
  species,
  location,
}) => {
  return (
    <Wrapper>
      <Image src={image} />
      <InfoWrapper>
        <CharacterName>{name}</CharacterName>
        <CharacterInfo>
          {status} - {species}
        </CharacterInfo>
        <Caption>Last known location:</Caption>
        <CharacterInfo>
          {location !== undefined ? location.name : 'Unknown'}
        </CharacterInfo>
      </InfoWrapper>
    </Wrapper>
  );
};
