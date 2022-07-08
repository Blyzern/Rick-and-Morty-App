import styled from '@emotion/styled';

export const NavWrapper = styled.div`
  background-color: #4D485B; 
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  width: 100%;
  height: 4.1 rem;
  z-index: 100;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  @media (max-width: 460px) {
    overflow: hidden;
    overflow-x: scroll;
    ::-webkit-scrollbar {
      width: 0px;
    }
    `;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
`;
