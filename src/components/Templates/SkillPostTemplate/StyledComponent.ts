import styled from "styled-components";
import Space from "../../../styles/Space";

export const Container = styled.div`
  display: grid;
  grid-template-rows: 50px 1fr;
  grid-template-columns: 1fr auto 1fr;
  height: 100%;
  width: 100%;
  padding: 0 32px;
  box-sizing: border-box;
`;

export const HeaderContainer = styled.div`
  display: block;
  grid-row: 1;
  grid-column: 1;
`;

export const SkillPostArea = styled.div`
  grid-row: 2;
  grid-column: 2/3;
  margin-top: ${Space.X_LARGE};
`;