import React from 'react';
import {ModalBase} from '../../Molecules/ModalBase';
import { StyledButton } from './MockAtoms';
import {TitleArea, ButtonArea, LogoSpace, ButtonElement} from './StyledComponent';
import Logomark from './Logo_tmp/logomark.png';
import {Link} from 'react-router-dom';

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
                            <StyledButton fontColor='#fff' backgroundColor='#ff8c50' onClick={()=>{}} width='100%' height='100%' borderRadius='50px'>アカウントを作成</StyledButton>
                        </Link>
                    </ButtonElement>
                    <ButtonElement marginTop='15%' height='1.4cm' width='100%'>
                        <Link to="/auth/login">
                            <StyledButton fontColor='#000' backgroundColor='#ccc' onClick={()=>{}} width='100%' height='100%' borderRadius='50px'>ログイン</StyledButton>
                        </Link>
                    </ButtonElement>
                </ButtonArea>
            </ModalBase>
    );
}

export default AuthModal;