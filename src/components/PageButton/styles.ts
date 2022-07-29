import styled from '@emotion/styled';

type props = {
  active?: boolean;
};

export const PrevButton = styled.button`
  margin-left: 1rem;
  width: fit-content;
  height: auto;
  cursor: ${(prop: props) => (prop.active ? 'pointer' : 'default')};
  background-color: ${(prop: props) => (prop.active ? '#7ab0ff' : 'darkgrey')};
  border: none;
  border-radius: 0.5rem;
  font-size: 1.5rem;
  font-family: cursive;
  @media (max-width: 550px) {
    margin-top: 0.5rem;
    font-size: 1.1rem;
  }
`;
export const NextButton = styled.button`
  margin-left: 1rem;
  width: fit-content;
  height: auto;
  cursor: ${(prop: props) => (prop.active ? 'pointer' : 'default')};
  background-color: ${(prop: props) => (prop.active ? '#7ab0ff' : 'darkgrey')};
  border: none;
  border-radius: 0.5rem;
  font-size: 1.5rem;
  font-family: cursive;
  @media (max-width: 550px) {
    margin-top: 0.5rem;
    font-size: 1.1rem;
  }
`;

export const Wrapper = styled.div``;
