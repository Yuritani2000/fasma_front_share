import styled from 'styled-components';
import Space from '../../../styles/Space';

export const Container = styled.div`
  display: grid;
  grid-template-rows: 50px 1fr;
  grid-template-columns: auto auto 1fr;
  height: 100%;
  width: 100%;
  padding: 0 ${Space.SMALL};
  box-sizing: border-box;
`;
export const HeaderContainer = styled.div`
  display: block;
  grid-row: 1;
  grid-column: 1;
`;
export const StyledNavigationMenu = styled.div(() => `
  margin-left: ${Space.SMALL};
  margin-top: ${Space.HUGE};
  grid-row: 2;
  grid-column: 1;
`)
export const MainArea = styled.div(() => `
  margin-left: ${Space.X_LARGE};
  margin-top: ${Space.HUGE};
  grid-row: 2;
  grid-column: 2;
`)