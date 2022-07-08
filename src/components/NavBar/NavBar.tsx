import React, { FC } from 'react';
import { pathnameSelector } from 'src/Pages/Home/store/homeSelectors';
import { useSelector } from 'react-redux';
import SvgRick from 'src/icons/Rick';
import { PageLink } from '../PageLink';
import { NavWrapper, Nav } from './styles';

const home: string = '/';

export const NavBar: FC = () => {
  const pathname = useSelector(pathnameSelector);

  const isCurrentPage = (href: string) => href === pathname;
  return (
    <NavWrapper>
      <Nav>
        <SvgRick />
        <PageLink linkRef="/" content="Home" selected={isCurrentPage(home)} />
      </Nav>
    </NavWrapper>
  );
};
