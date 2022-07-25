import styled from '@emotion/styled';

export const PageWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  overflow: auto;
  ::-webkit-scrollbar {
    width: 0px;
  }
`;

export const Spacer = styled.p`
  height: 4rem;
  width: 100%;
`;

export const ComponentWrapper = styled.div`
  width: 70vw;
  height: fit-content;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  @media (max-width: 480px) {
    margin-bottom: 4rem;
    min-width: 100vw;
    flex-direction: column;
    justify-content: center;
  }
`;
