import styled from 'styled-components';
import Color from '../../../styles/Color';

export const Container = styled.div(() => `
  position: relative;
  width: 750px;
  height: 69px;
  background-color: ${Color.White};
  border-bottom-style: solid;
  border-width: 2px;
  border-color: transparent transparent #bbb transparent;
  cursor: pointer;
`);

export const Content = styled.div(() => `
  width: 100%;
  height: 100%;
  border: solid;
  box-sizing: border-box;
  border-width: 20px;
  border-color: transparent;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`);

export const PurchaseNotificationText = styled.div(() => `
  flex-shrink: 0;
  width: calc(100% - 12px); 
  border-right: solid;
  border-right-color: transparent;
  border-width: 20px;
  box-sizing: border-box;
  align-self: center;
`);

export const TriangleParent = styled.div(() => `
  align-self: center;
  position: relative;
  width: 12px;
  height: 100%;
  flex-shrink: 0;
`);

export const TrianglePosition = styled.div(() => `
  position: absolute;
  left: 100%;
  top: 50%;
  transform: translate(-50%, -50%);
`);