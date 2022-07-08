import styled from '@emotion/styled';

type linkProps = {
  selected?: boolean;
};

export const Link = styled.a<linkProps>`
  color: ${(props) => (props.selected ? '#5FAAFF' : 'white')};
  text-decoration: none;
  font-family: cursive;
  font-size: 1.5rem;
  padding-left: 1rem;
  @media (max-width: 768px) {
    font-size: 1.4rem;
  }
  @media (max-width: 360px) {
    font-size: 1.3rem;
    font-weight: bold;
  }
`;
