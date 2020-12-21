import React from 'react';
import {ModalBase} from '../../Molecules/ModalBase';
import  Button , {ButtonTypes} from '../../Atoms/Button/index';
import {TitleArea, ButtonArea, LogoSpace, ButtonElement} from './StyledComponent';
import Logomark from './Logo_tmp/logomark.png';
import {Link} from 'react-router-dom';
import { FontSize } from '../../../styles/Font'

const AuthModal: React.FC = (props) => {
    return (
            <ModalBase>
                <TitleArea height='42%'>
                    <LogoSpace>
                        <img src={Logomark} width='100%'/>
                    </LogoSpace>
                </TitleArea>
                <ButtonArea height='58%'>
                    <ButtonElement marginTop='0%' height='54px' width='100%'>
                        <Link to="/auth/signup">
                            <Button label='アカウントを作成' size={FontSize.Large} buttonType={ButtonTypes.primary} rounded={true} handleClick={()=>{}}/>
                        </Link>
                    </ButtonElement>
                    <ButtonElement marginTop='15%' height='1.4cm' width='100%'>
                        <Link to="/auth/login">
                            <Button />
                        </Link>
                    </ButtonElement>
                </ButtonArea>
            </ModalBase>
    );
}

export default AuthModal;