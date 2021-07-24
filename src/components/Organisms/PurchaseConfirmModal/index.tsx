import React from 'react';
import { Container, BackButtonParent, BackButton, ModalContent, PurchaseConfirmText, PriceText, AddressArea, AddressTexts, PurchaseButton } from './StyledComponents';
import { ModalBase } from '../../Molecules/Modal/ModalBase';
import Text from '../../Atoms/Text/index';
import { FontSize } from '../../../styles/Font';
import Button, { ButtonShapes, ButtonTypes } from '../../Atoms/Button/index';
import Color from '../../../styles/Color';

export type PurchaseConfirmModalProps = {
  isGmailAddress: boolean;
  isFunMailAddress: boolean;
  isOtherMailAddress: boolean;
  isLineQrCode: boolean;
  skillPrice: number;
  handleClickCloseButton: () => void;
  handleClickPurchaseButton: () => void;
}

const PurchaseConfirmModal: React.FC<PurchaseConfirmModalProps> = (props) => {
  const { isGmailAddress,
    isFunMailAddress,
    isOtherMailAddress,
    isLineQrCode,
    skillPrice,
    handleClickCloseButton,
    handleClickPurchaseButton,
  } = props;

  return (
    <Container>
      <ModalBase>
        <BackButtonParent>
          <BackButton>
            <Button handleClick={handleClickCloseButton} diameter='0.97cm' buttonType={ButtonTypes.danger} fontColor={Color.White} fontSize={FontSize.H1} label='×' buttonShape={ButtonShapes.circle} />
          </BackButton>
        </BackButtonParent>
        <ModalContent>
          <PurchaseConfirmText>
            <Text isBold={true} children='購入しますか？' textType='Default' size='Large' />
          </PurchaseConfirmText>
          <PriceText>
            <Text isBold={false} children='支払いFUNney' textType='Default' size='Small' />
            <Text isBold={true} children={skillPrice ? skillPrice.toLocaleString() : 0} textType='Default' size='Medium' />
          </PriceText>
          <AddressArea>
            <Text isBold={false} children='連絡先' textType='Default' size='Small' />
            <AddressTexts>
              <Text isBold={true} children={(isGmailAddress) ? 'Gmail' : ''} textType='Default' size='Medium' />
              <Text isBold={true} children={(isFunMailAddress) ? '学内メール' : ''} textType='Default' size='Medium' />
              <Text isBold={true} children={(isOtherMailAddress) ? 'その他のメール' : ''} textType='Default' size='Medium' />
              <Text isBold={true} children={(isLineQrCode) ? 'LINE' : ''} textType='Default' size='Medium' />
            </AddressTexts>
          </AddressArea>
          <PurchaseButton>
            <Button handleClick={() => { handleClickPurchaseButton() }} label='購入する' buttonType={ButtonTypes.primary} fontSize={FontSize.Large} />
          </PurchaseButton>
        </ModalContent>
      </ModalBase>
    </Container>
  );
}

export default PurchaseConfirmModal;