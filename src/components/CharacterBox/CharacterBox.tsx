import React, { FC } from 'react';
import { Wrapper, Image, InfoWrapper, CharacterName } from './styled';

type props = {
  name: string;
  image: string;
};

export const CharacterBox: FC<props> = ({ name, image }) => {
  return (
    <Wrapper>
      <Image src={image} />
      <InfoWrapper>
        <CharacterName>{name}</CharacterName>
      </InfoWrapper>
    </Wrapper>
  );
};
