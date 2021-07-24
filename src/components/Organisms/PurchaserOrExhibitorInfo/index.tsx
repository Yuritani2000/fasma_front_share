import React, { useState } from 'react';
import Text from '../../Atoms/Text/index';
import Image from '../../Atoms/Image/Image';
import { Container, MailAddress, Content, Title, AddressArea, AddressTexts, AddressText, QrCode } from './StyledComponents';

export enum NotificationType {
  Bought = 0,
  Sold = 1,
}

export type PurchaserOrExhibitorInfoProps = {
  isVisible: boolean;
  notificationType?: keyof typeof NotificationType;
  month?: number;
  date?: number;
  gmailAddress?: string;
  funMailAddress?: string;
  otherMailAddress?: string;
  lineQrCodeUrl?: string;
}

const PurchaserOrExhibitorInformation: React.FC<PurchaserOrExhibitorInfoProps> = (props) => {
  const {
    isVisible,
    notificationType = 'Bought',
    month = 0,
    date = 0,
    gmailAddress = '',
    funMailAddress = '',
    otherMailAddress = '',
    lineQrCodeUrl = '',
  } = props;
  const [isDisplayQrCord, setIsDisplayQrCord] = useState<boolean>(false);

  const getPurchaseMessage = () => {
    let purchaseMessage: string = 'この商品は' + month + '/' + date + 'に';
    purchaseMessage += (NotificationType[notificationType] === 0) ? '購入済です' : (NotificationType[notificationType] === 1) ? '購入されました' : '???されました';
    return purchaseMessage;
  }

  const getContactText = () => {
    let contactText: string = (NotificationType[notificationType] === 0) ? '出品者' : (NotificationType[notificationType] === 1) ? '購入者' : '???';
    contactText += 'への連絡';
    return contactText;
  }

  return (
    <Container isVisible={isVisible}>
      <Content>
        <Title>
          <Text isBold={true}
            children={getPurchaseMessage()}
            textType='Default'
            size='H1' />
        </Title>
        <Text isBold={true}
          children={getContactText()}
          textType='Default'
          size='Large' />
        <AddressArea>
          <AddressTexts>
            <AddressText marginTop={27} isDisplay={gmailAddress !== ''}>
              <Text children='Gmail' textType='Tag' size='Medium' />
              <MailAddress>
                <Text children={gmailAddress} textType='Default' size='Medium' />
              </MailAddress>
            </AddressText>
            <AddressText marginTop={18} isDisplay={funMailAddress !== ''}>
              <Text children='学内メール' textType='Tag' size='Medium' />
              <MailAddress>
                <Text children={funMailAddress} textType='Default' size='Medium' />
              </MailAddress>
            </AddressText>
            <AddressText marginTop={18} isDisplay={otherMailAddress !== ''}>
              <Text children='その他のメール' textType='Tag' size='Medium' />
              <MailAddress>
                <Text children={otherMailAddress} textType='Default' size='Medium' />
              </MailAddress>
            </AddressText>
            <AddressText marginTop={18} isDisplay={lineQrCodeUrl !== ''}>
              <Text children='LINE' textType='Tag' size='Medium' />
              <MailAddress>
                <Text handleClick={() => { setIsDisplayQrCord(!isDisplayQrCord); }} isBold={true} children={isDisplayQrCord ? 'QRコードを隠す' : 'QRコードを表示する'} textType='Primary' size='Medium' />
              </MailAddress>
            </AddressText>
          </AddressTexts>
          <QrCode isDisplay={isDisplayQrCord}>
            <Image url={lineQrCodeUrl} size={158} />
          </QrCode>
        </AddressArea>
      </Content>
    </Container>
  );
}

export default PurchaserOrExhibitorInformation;