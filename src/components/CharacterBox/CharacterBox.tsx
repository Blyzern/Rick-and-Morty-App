import React, { FC } from 'react';
import {
  Wrapper,
  Image,
  InfoWrapper,
  CharacterName,
  Caption,
  CharacterInfo,
} from './styled';

type props = {
  name: string;
  image: string;
  status: string;
  species: string;
  location: string;
};

export const CharacterBox: FC<props> = ({
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
        <CharacterInfo>{location}</CharacterInfo>
      </InfoWrapper>
    </Wrapper>
  );
};
