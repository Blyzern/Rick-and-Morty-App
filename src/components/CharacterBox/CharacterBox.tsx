import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { CharDataTypes } from 'src/Pages/Home/store/charSlice.interface';
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
  const { t } = useTranslation();
  return (
    <Wrapper>
      <Image src={image} />
      <InfoWrapper>
        <CharacterName>{name}</CharacterName>
        <CharacterInfo>
          {status} - {species}
        </CharacterInfo>
        <Caption>{t('Location')}</Caption>
        <CharacterInfo>
          {location !== undefined ? location.name : null}
        </CharacterInfo>
      </InfoWrapper>
    </Wrapper>
  );
};
