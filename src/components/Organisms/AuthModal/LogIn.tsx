import React from 'react';
import { FontSize } from '../../../styles/Font';
import {ModalBase} from '../../Molecules/ModalBase';
import Input from '../../Atoms/Input/index';
import { StyledButton } from './MockAtoms';
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
            <FormArea height='25%'>
                <FormElement marginBottom='20%' height='40%' width='100%'>
                    <Input value='' onChange={()=>{}} type='text' placeholder='学籍番号' fontSize='Large'/>
                </FormElement>
                <FormElement height='40%' width='100%'>
                    <Input value='' onChange={()=>{}} type='password' placeholder='パスワード' fontSize='Large'/>
                </FormElement>
            </FormArea>
            <ButtonArea height='33%'>
                <ButtonElement marginTop='30%' height='1.4cm' width='100%'>
                    <Link to="/home">
                        <StyledButton fontColor='#fff' backgroundColor='#ff8c50' onClick={()=>{}} width='100%' height='100%' borderRadius='50px'>ログイン</StyledButton>
                    </Link>
                </ButtonElement>
            </ButtonArea>
        </ModalBase>
    );
}

export default LogIn;