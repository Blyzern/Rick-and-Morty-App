import React, { FC } from 'react';
import { Link } from './styles';
import { props } from './PageLink.interface';

export const PageLink: FC<props> = ({ linkRef, content, selected }) => {
  return selected === true ? (
    <Link href={linkRef} selected>
      {content}
    </Link>
  ) : (
    <Link href={linkRef}>{content}</Link>
  );
};
