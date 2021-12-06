import styled from 'styled-components';

export const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 200px 1fr;
  grid-template-columns: 1fr 225px 500px 1fr;
  height: 100%;
  width: 100%;
  padding: 0 32px;
  box-sizing: border-box;
`;

export const ImageContainer = styled.div`
  grid-row: 2 / 3;
  grid-column: 2 / 3;
  height: 100%;
  width: 100%;
`;

export const TextContents = styled.div`
  grid-row: 2 / 3;
  grid-column: 3 / 4;
  height: 100%;
  width: 100%;
  margin: 30px 10px;
`;
