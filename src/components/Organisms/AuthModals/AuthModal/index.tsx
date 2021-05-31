import React from 'react';
import {ModalBase} from '../../../Molecules/Modal/ModalBase';
import  Button , {ButtonShapes, ButtonTypes} from '../../../Atoms/Button/index';
import {TitleArea, ButtonArea, LogoSpace, ButtonElement} from '../StyledComponent';
import Logomark from '../Logo_tmp/logomark.png';
import { useHistory } from 'react-router-dom';
import { FontSize } from '../../../../styles/Font'

const AuthModal: React.FC = () => {
    const history = useHistory();

    const handleClickSignUp = () => {
        history.push('/auth/signup');
    }

    const handleClickLogIn = () =>{
        history.push('/auth/login');
    }

    return (
            <ModalBase>
                <TitleArea height='42%'>
                    <LogoSpace>
                        <img src={Logomark} width='100%' alt='Service Logo'/>
                    </LogoSpace>
                </TitleArea>
                <ButtonArea height='58%'>
                    <ButtonElement marginTop='0%' height='54px' width='100%'>
                        <Button label='アカウントを作成' fontSize={FontSize.Large} buttonShape={ButtonShapes.rect} buttonType={ButtonTypes.primary} rounded={true} handleClick={handleClickSignUp}/>
                    </ButtonElement>
                    <ButtonElement marginTop='15%' height='1.4cm' width='100%'>
                        <Button label='ログイン' fontSize={FontSize.Large} buttonShape={ButtonShapes.rect} buttonType={ButtonTypes.secondary} rounded={true} handleClick={handleClickLogIn}/>
                    </ButtonElement>
                </ButtonArea>
            </ModalBase>
    );
}

export default AuthModal;