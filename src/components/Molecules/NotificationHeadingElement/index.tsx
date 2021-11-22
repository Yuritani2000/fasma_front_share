import React from 'react';
import Text from '../../Atoms/Text';
import TriangleIcon from '../../Atoms/TriangleIcon/TriangleIcon';
import { Container, TriangleParent, TrianglePosition, Content, PurchaseNotificationText } from './StyledComponents';


export type NotificationHeadingElementProps = {
  skillName: string;
  purchaser: string;
  width?: number;
  handleClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

const NotificationHeadingElement: React.FC<NotificationHeadingElementProps> = (props) => {
  const { skillName, purchaser, width, handleClick } = props;
  let label = `出品した「${skillName}」が「${purchaser}」さんに購入されました。購入者へ連絡してください。`

  return (
    <Container width={width} onClick={handleClick}>
      <Content>
        <PurchaseNotificationText>
          <Text children={label} textType="Default" size="Small" link={true}/>
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