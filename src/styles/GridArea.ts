// styled-componentにてGrid Layoutを扱う際に頻繁に使用する記述を切り出し

import styled from "styled-components";

type Props = {
  area: string
}

const GridArea = styled.div<Props>(props => `
  grid-area: ${props.area};
  position: relative;
`);

export default GridArea;