import React from 'react';
import { Title, StyledButton } from './StyledComponent';
import { useHistory } from 'react-router-dom';
import { FontSize } from '../../../styles/Font';
import Button, { ButtonShapes, ButtonTypes } from '../../Atoms/Button';
import Modal from '../../Molecules/Modal';
import Text from '../../Atoms/Text';
import { useDispatch } from 'react-redux';
import { clickNavigationMenu } from '../../../actions/NavigationMenu/ActionCreator';
import { NavigationMenuContent } from '../../../states/NavigationMenu';

const PostCompletedModal: React.FC = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const handleClickConfirmPostSkill = () => {
    history.push(`${NavigationMenuContent.ExhibitedSkills}`);
    dispatch(clickNavigationMenu({ enLabel: NavigationMenuContent.ExhibitedSkills }))
  }

  const handleClickTopPage = () => {
    history.push('/home');
  }

  return (
    <Modal>
      <Title>
        <Text isBold={true} children='出品が完了しました' textType='Default' size='H2' />
      </Title>
      <StyledButton>
        <Button label='出品したスキルを確認' fontSize={FontSize.Large} buttonShape={ButtonShapes.rect} buttonType={ButtonTypes.primary} rounded={true} handleClick={handleClickConfirmPostSkill} />
      </StyledButton>
      <StyledButton>
        <Button label='トップページに戻る' fontSize={FontSize.Large} buttonShape={ButtonShapes.rect} buttonType={ButtonTypes.secondary} rounded={true} handleClick={handleClickTopPage} />
      </StyledButton>
    </Modal>
  );
}

export default PostCompletedModal;