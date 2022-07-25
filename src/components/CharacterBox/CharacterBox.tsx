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

// const translationsEN = {
//   Locations: 'Last known location:',
//   unknown: 'Unknown',
// };
// const translationsDE = {
//   Locations: 'Letzte bekannte Position:',
//   unknown: 'Unbekannt',
// };
// const translationsES = {
//   Locations: 'Última localización conocida:',
//   unknown: 'Desconocido',
// };
// const trnslationsIT = {
//   Locations: 'Ultima posizione conosciuta:',
//   unknown: 'Sconosciuta',
// };

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
