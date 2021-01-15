import styled from "styled-components";
import Space from "../../../styles/Space";


export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  cursor: pointer;
  padding: ${Space.BASE} 0;
  >:last-child {
    margin-left: auto;
  }
`;