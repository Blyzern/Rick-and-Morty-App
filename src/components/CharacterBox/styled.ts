import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  width: 30vw;
  height: fit-content;
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  margin-bottom: 1rem;
  background-color: #7ab0ff;
  @media (max-width: 480px) {
    width: 70vw;
  }
`;
export const ImageWrapper = styled.div`
  border-radius: 5px;
`;

export const Image = styled.img`
  width: 10vw;
  height: auto;
  border-radius: 5px;
  @media (max-width: 480px) {
    width: 30vw;
  }
`;

export const InfoWrapper = styled.div`
  margin-right: 1rem;
  margin-left: 1rem;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;
export const CharacterName = styled.span`
  font-size: 1.2em;
  font-weight: bold;
`;

export const CharacterInfo = styled.span`
  margin-bottom: 0.5rem;
`;
export const Caption = styled.span`
  color: lightgray;
`;
