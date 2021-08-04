import React from 'react';
import { Title, StyledButton } from './StyledComponent';
import { useHistory } from 'react-router-dom';
import { FontSize } from '../../../styles/Font';
import Button, { ButtonShapes, ButtonTypes } from '../../Atoms/Button';
import { ModalBase } from '../../Molecules/Modal/ModalBase';
import Text from '../../Atoms/Text';

const ListingCompletedModal: React.FC = () => {
  const history = useHistory();

  const handleClickConfirmListingSkill = () => {
    history.push('/config');
  }

  const handleClickTopPage = () => {
    history.push('/home');
  }

  return (
    <ModalBase>
      <Title>
        <Text isBold={true} children='出品が完了しました' textType='Default' size='H2' />
      </Title>
      <StyledButton>
        <Button label='出品したスキルを確認' fontSize={FontSize.Large} buttonShape={ButtonShapes.rect} buttonType={ButtonTypes.primary} rounded={true} handleClick={handleClickConfirmListingSkill} />
      </StyledButton>
      <StyledButton>
        <Button label='トップページに戻る' fontSize={FontSize.Large} buttonShape={ButtonShapes.rect} buttonType={ButtonTypes.secondary} rounded={true} handleClick={handleClickTopPage} />
      </StyledButton>
    </ModalBase>
  );
}

export default ListingCompletedModal;