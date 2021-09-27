import React from 'react';
import { Title, StyledButton } from './StyledComponent';
import { useHistory } from 'react-router-dom';
import { FontSize } from '../../../styles/Font';
import Button, { ButtonShapes, ButtonTypes } from '../../Atoms/Button';
import { ModalBase } from '../../Molecules/Modal/ModalBase';
import Text from '../../Atoms/Text';
import { useDispatch } from 'react-redux';
import { clickExhibitedSkillsTab } from '../../../actions/NavigationMenu/ActionCreator';

const PostCompletedModal: React.FC = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const handleClickConfirmPostSkill = () => {
    history.push('/config/ExhibitedSkills');
    dispatch(clickExhibitedSkillsTab())
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
        <Button label='出品したスキルを確認' fontSize={FontSize.Large} buttonShape={ButtonShapes.rect} buttonType={ButtonTypes.primary} rounded={true} handleClick={handleClickConfirmPostSkill} />
      </StyledButton>
      <StyledButton>
        <Button label='トップページに戻る' fontSize={FontSize.Large} buttonShape={ButtonShapes.rect} buttonType={ButtonTypes.secondary} rounded={true} handleClick={handleClickTopPage} />
      </StyledButton>
    </ModalBase>
  );
}

export default PostCompletedModal;