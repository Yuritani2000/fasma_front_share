import React from 'react';
import {ModalBase} from '../../Molecules/ModalBase';
import {StyledForm, StyledButton } from './MockAtoms';
import {TitleArea, FormArea, ButtonArea, LogoSpace, FormElement, ButtonElement} from './StyledComponent';
import Logomark from './Logo_tmp/logomark.png';
import {Link} from 'react-router-dom';

const LogIn: React.FC = (props) => {
    return (
        <ModalBase>
            <TitleArea height='42%'>
                <LogoSpace>
                    <img src={Logomark} width='100%'/>
                </LogoSpace>
            </TitleArea>
            <FormArea height='30%'>
                <FormElement height='50%' width='100%'>
                    <StyledForm type='text' placeholder='学籍番号' width='100%' height='70%' borderRadius='4px' fontSize='1.2em'/>
                </FormElement>
                <FormElement height='50%' width='100%'>
                    <StyledForm type='password' placeholder='パスワード' width='100%' height='70%' borderRadius='4px' fontSize='1.2em'/>
                </FormElement>
            </FormArea>
            <ButtonArea height='28%'>
                <ButtonElement marginTop='20%' height='1.4cm' width='100%'>
                    <Link to="/home">
                        <StyledButton fontColor='#fff' backgroundColor='#ff8c50' onClick={()=>{}} width='100%' height='100%' borderRadius='50px'>ログイン</StyledButton>
                    </Link>
                </ButtonElement>
            </ButtonArea>
        </ModalBase>
    );
}

export default LogIn;