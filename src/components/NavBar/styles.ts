import styled from '@emotion/styled';

export const NavWrapper = styled.div`
    background-color: black;
  position: fixed;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  width: 100%;
  height: 4.1 rem;
  z-index: 100;
  @media (max-width: 460px) {
    overflow: hidden;
    overflow-x: scroll;
    ::-webkit-scrollbar {
      width: 0px;
    }
    `;

export const NavBar = styled.nav``;
