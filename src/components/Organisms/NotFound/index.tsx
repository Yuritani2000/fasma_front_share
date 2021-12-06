import React from 'react';
// StyledComponents
import { Wrapper, TextContents, ImageContainer } from './styledComponents';

// Atoms
import Text from '../../Atoms/Text';
import { ReactComponent as NotFoundImage } from '../../../utils/Images/notFound.svg';

const NotFound: React.FC = () => {
  return (
    <Wrapper>
      <ImageContainer>
        <NotFoundImage />
      </ImageContainer>
      <TextContents>
        <Text maxLines={10} textType='Default' size='Medium'>
          {`お探しのページは一時的にアクセスができない状況にあるか、移動もしくは削除された可能性があります。
        また、URLにタイプミスがないか再度ご確認ください。`}
        </Text>
      </TextContents>
    </Wrapper>
  );
};

export default NotFound;
