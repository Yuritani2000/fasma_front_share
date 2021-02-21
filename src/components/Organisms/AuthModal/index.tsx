import React from 'react';
import styled from 'styled-components';
import Color from '../../../styles/Color';
import { FontFamily, FontSize } from '../../../styles/Font';
import {ModalBase} from '../../Molecules/ModalBase';
import {StyledForm, StyledButton } from './MockAtoms';
import {TitleArea, FormArea, ButtonArea, LogoSpace, FormElement, ButtonElement} from './StyledComponent';
import Logomark from './Logo_tmp/logomark.png';
import {Link} from 'react-router-dom';
import {useRouteMatch, Switch, Route} from 'react-router-dom'
import LogIn from './LogIn';
import SignUp from './SignUp';

const AuthModal: React.FC = (props) => {
    const match:any = useRouteMatch();
    console.log(match);
    return (
        <div>
        <ModalBase>
            <TitleArea height='42%'>
                <LogoSpace>
                    <img src={Logomark} width='100%'/>
                </LogoSpace>
            </TitleArea>
            <ButtonArea height='58%'>
                <ButtonElement marginTop='0%' height='54px' width='100%'>
                    <Link to="/auth/logIn">
                        <StyledButton fontColor='#fff' backgroundColor='#ff8c50' onClick={()=>{}} width='100%' height='100%' borderRadius='50px'>アカウントを作成</StyledButton>
                    </Link>
                </ButtonElement>
                <ButtonElement marginTop='15%' height='54px' width='100%'>
                    <Link to="/auth/signUp">
                        <StyledButton fontColor='#000' backgroundColor='#ccc' onClick={()=>{}} width='100%' height='100%' borderRadius='50px'>ログイン</StyledButton>
                    </Link>
                </ButtonElement>
            </ButtonArea>
        </ModalBase>
            <Route exact path="/auth/logIn" component={LogIn}/>
            <Route exact path="/auth/signUp" component={SignUp}/>
        </div>
    );
}

export default AuthModal;