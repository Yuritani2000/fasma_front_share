import React, { useState } from 'react';
import { FontSize } from '../../../../styles/Font';
import {ModalBase} from '../../../Molecules/Modal/ModalBase';
import Input from '../../../Atoms/Input/index';
import  Button , {ButtonShapes, ButtonTypes} from '../../../Atoms/Button/index';
import {TitleArea, FormArea, ButtonArea, LogoSpace, FormElement, ButtonElement} from '../StyledComponent';
import Logomark from '../Logo_tmp/logomark.png';
import { useHistory } from 'react-router-dom';

const LogIn: React.FC = () => {
    const [studentId, setStudentId] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    const onChangeStudentId = (value: string) => {
        setStudentId(value);
    }

    const onChangePassword = (value: string) => {
        setPassword(value);
    }

    const handleClickLogIn = () => {
        history.push('/home');
    }

    return (
        <ModalBase>
            <TitleArea height='42%'>
                <LogoSpace>
                    <img src={Logomark} width='100%' alt='Service Logo'/>
                </LogoSpace>
            </TitleArea>
            <FormArea height='25%'>
                <FormElement marginBottom='10%' height='40%' width='100%'>
                    <Input value={studentId} textOnChange={onChangeStudentId} type='number' placeholder='学籍番号' fontSize='Large' inputType={"text"}/>
                </FormElement>
                <FormElement height='40%' width='100%'>
                    <Input value={password} textOnChange={onChangePassword} type='password' placeholder='パスワード' fontSize='Large' inputType={"text"} />
                </FormElement>
            </FormArea>
            <ButtonArea height='33%'>
                <ButtonElement marginTop='1.8cm' height='1.4cm' width='100%'>
                    <Button label='ログイン' fontSize={FontSize.Large} buttonShape={ButtonShapes.rect} buttonType={ButtonTypes.primary} rounded={true} handleClick={handleClickLogIn}/>
                </ButtonElement>
            </ButtonArea>
        </ModalBase>
    );
}

export default LogIn;