import styled from 'styled-components';
import Color from '../../../styles/Color';
import Space from '../../../styles/Space';

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  background: ${Color.White};
  padding-right: ${Space.LARGE};
`;

export const LogoWrapper = styled.div`
  cursor: pointer;
  padding: 3px 0px;
`;

export const AlertWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  padding-left: 12px;
  padding-right: 12px;
  height: 100%;
`;

export const RightWrapper = styled.div`
  margin-left: auto;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
`;