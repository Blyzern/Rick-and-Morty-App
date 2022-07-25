import React, { FC } from 'react';
import { Toggle, Wrapper, Slider } from './styles';

interface prop {
  event: () => void;
}

export const Switch: FC<prop> = ({ event }) => {
  return (
    <Wrapper>
      <Toggle type="checkbox" onChange={event} />
      <Slider />
    </Wrapper>
  );
};
