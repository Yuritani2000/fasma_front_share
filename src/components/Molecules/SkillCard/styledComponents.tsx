import styled from 'styled-components';
import Color from '../../../styles/Color';

export const Wrapper = styled.div`
  width: 659px;
  height: 200px;
  background: ${Color.White};
  margin-bottom: 20px;
  padding: 10px;
  display: grid;
  grid-template-columns: 459px 180px;
  box-sizing: border-box;
  overflow: hidden;
`

export const DescriptionBox = styled.div`
  width: 459px;
  height: 180px;
  background: ${Color.White};
  padding-right:10px;
  box-sizing: border-box;
  display: grid;
  grid-template-rows: 27px 20px 26px 87px 20px;
  overflow: hidden;
`
export const TagWrapper = styled.div`
  width: fit-content;
  overflow: hidden;
  padding-right: 5px;
`

export const ListWrapper = styled.div`
  display: flex;
  flex-direction: row;
  overflow: hidden;
`