import styled from 'styled-components';
import Color from '../../../styles/Color';

export const Wrapper = styled.div`
  width: 659px;
  height: 200px;
  background: ${Color.Gray};
  padding: 10px;
  display: grid;
  grid-template-columns: 469px 190px;
  overflow: hidden;
`

export const DescriptionBox = styled.div`
  width: 469px;
  height: 200x;
  background: ${Color.White};
  padding-right:10px;
  box-sizing: border-box;
  display: grid;
  grid-template-rows: 27px 20px 25px 108px 20px;
  overflow: hidden;
`