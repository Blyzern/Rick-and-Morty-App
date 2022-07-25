import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { changeLanguage, getCurrentLanguage } from 'src/services/i18n';
import { pathnameSelector } from 'src/Pages/Home/store/charSelectors';
import { useSelector } from 'react-redux';
import SvgRick from 'src/icons/Rick';
import { PageLink } from '../PageLink';
import { NavWrapper, Nav } from './styles';

const charPage: string = '/';

export const NavBar: FC = () => {
  const pathname = useSelector(pathnameSelector);
  const { t } = useTranslation();

  const handleChangeLanguage = () => {
    const currentLanguage = getCurrentLanguage();
    console.log(currentLanguage);
    changeLanguage(currentLanguage === 'en' ? 'it' : 'en');
  };

  const isCurrentPage = (href: string) => href === pathname;
  return (
    <NavWrapper>
      <Nav>
        <SvgRick />
        <PageLink
          linkRef="/"
          content={t('charBtn')}
          selected={isCurrentPage(charPage)}
        />
        <button type="button" onClick={handleChangeLanguage}>
          Language
        </button>
      </Nav>
    </NavWrapper>
  );
};
