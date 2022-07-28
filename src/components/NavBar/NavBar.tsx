import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Switch } from 'src/components/ToggleSwitch';
import { changeLanguage, getCurrentLanguage } from 'src/services/i18n';
import {
  pathnameSelector,
  infoSelector,
} from 'src/Pages/Home/store/charSelectors';
import { InfoTypes } from 'src/Pages/Home/store/charSlice.interface';
import { useSelector } from 'react-redux';
import SvgRick from 'src/icons/Rick';
import { PageLink } from '../PageLink';
import { NavWrapper, Nav } from './styles';
import { PageButton } from '../PageButton';

const charPage: string = '/';

export const NavBar: FC = () => {
  const pathname: string = useSelector(pathnameSelector);
  const info: InfoTypes = useSelector(infoSelector);
  const { prev, next } = info;
  const { t } = useTranslation();

  const handleChangeLanguage = () => {
    const currentLanguage = getCurrentLanguage();
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
        {pathname === charPage ? <PageButton prev={prev} next={next} /> : null}
      </Nav>
      <Nav>
        <Switch event={handleChangeLanguage} />
      </Nav>
    </NavWrapper>
  );
};
