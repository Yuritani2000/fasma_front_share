import React from 'react';
import Text from '../../Atoms/Text';
import TriangleIcon from '../../Atoms/TriangleIcon/TriangleIcon';
import { Container, TriangleParent, TrianglePosition, Content, PurchaseNotificationText } from './StyledComponents';


export type NotificationHeadingElementProps = {
  skillName: string;
  purchaser: string
}

const NotificationHeadingElement: React.FC<NotificationHeadingElementProps> = (props) => {
  const { skillName, purchaser } = props;
  let label = `出品した「${skillName}」が「${purchaser}」さんに購入されました。購入者へ連絡してください。`

  return (
    <Container>
      <Content>
        <PurchaseNotificationText>
          <Text children={label} textType="Default" size="Small" omit={true} omittingLineNumber={1} />
        </PurchaseNotificationText>
        <TriangleParent>
          <TrianglePosition>
            <TriangleIcon />
          </TrianglePosition>
        </TriangleParent>
      </Content>
    </Container>
  );
}

export default NotificationHeadingElement;