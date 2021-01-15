import styled from "styled-components";
import Space from "../../../styles/Space";

export const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 50px 75px 1fr;
  grid-template-columns: 300px auto 1fr;
  height: 100%;
  width: 100%;
  padding: 0 32px;
  box-sizing: border-box;
`;
export const HeaderWrapper = styled.div`
  display: block;
  grid-row: 1;
  grid-column: 1/3;
`;
export const SkillListResultSettingWrapper = styled.div`
  display: block;
  grid-row: 2;
  grid-column: 1/4;
`;
export const DetailedSearchBoxWrapper = styled.div`
  display: block;
  grid-row: 3/4;
  grid-column: 1/2;
`;
export const SkillCardListWrapper = styled.div`
  display: block;
  grid-row: 3/4;
  grid-column: 2/3;
  height: 100%;
  overflow: scroll;
  padding: 0 ${Space.LARGE};
`;
