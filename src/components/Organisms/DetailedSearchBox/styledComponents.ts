import styled from "styled-components";
import Color from "../../../styles/Color";
import Space from "../../../styles/Space";

export const Wrapper = styled.div`
  display: flex;
  flex-flow: column;
  position: fixed;
  background: ${Color.White};
  padding: ${Space.BASE};
`;

export const TitleWrapper = styled.div`
  display: block;
  padding: ${Space.TINY};
  margin: ${Space.TINY};
  padding-top: 0;
  margin-top: 0;
`;

export const CategoryWrapper = styled.div`
  cursor: pointer;
  padding: ${Space.TINY} 0;
  display: flex;
  flex-flow: column;
  z-index: 2;
`;

export const PriceWrapper = styled.div`
  display: flex;
  flex-flow: column;
  padding: ${Space.TINY} 0;
`;

export const PriceInputWrapper = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  padding: ${Space.TINY} 0;
`;


export const DaysWrapper = styled.div`
  display: flex;
  flex-flow: column;
  z-index: 1;
  padding: ${Space.TINY} 0;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-flow: row;
  align-items: center;
  padding-top: ${Space.HUGE} ;
  padding-bottom: ${Space.SMALL} ;
  justify-content: space-between;
`;
