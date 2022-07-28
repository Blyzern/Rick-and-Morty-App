import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { InfoTypes } from 'src/Pages/Home/store/charSlice.interface';
import { setLink } from 'src/Pages/Home/store/charSlice';
import { useDispatch } from 'react-redux';
import { PrevButton, NextButton, Wrapper } from './styles';

export const PageButton: FC<InfoTypes> = ({ prev, next }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const handleClick = (link: string) => {
    dispatch(setLink(link));
  };

  return (
    <Wrapper>
      {prev !== null ? (
        <PrevButton active onClick={() => handleClick(prev)}>
          {t('Previous')}
        </PrevButton>
      ) : (
        <PrevButton>{t('Previous')}</PrevButton>
      )}
      {!next !== null ? (
        <NextButton active onClick={() => handleClick(next)}>
          {t('Next')}
        </NextButton>
      ) : (
        <NextButton>{t('Next')}</NextButton>
      )}
    </Wrapper>
  );
};
