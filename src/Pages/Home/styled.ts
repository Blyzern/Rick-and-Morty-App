import styled from '@emotion/styled';

export const PageWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  background-image: url('https://media.cdn.adultswim.com/uploads/20210628/thumbnails/2_21628714375-RickMorty_Inside502.png');
  overflow: auto;
  ::-webkit-scrollbar {
    width: 0px;
  }
`;

export const Spacer = styled.p`
  height: 2rem;
  width: 100%;
  @media (max-width: 480px) {
    height: 4rem;
  }
`;

export const ComponentWrapper = styled.div`
  width: 90vw;
  height: fit-content;
  display: flex;
  flex-direction: row;
  align-items: center;
  // justify-content: space-between;
  flex-wrap: wrap;
  @media (max-width: 480px) {
    margin-bottom: 4rem;
    min-width: 100vw;
    flex-direction: column;
    justify-content: center;
  }
`;
