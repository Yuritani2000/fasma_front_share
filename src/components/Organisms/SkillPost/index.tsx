import React, {useState, useEffect} from 'react';
import { useHistory } from 'react-router';
import ImageInput from '../../Molecules/ImageInput';
import Button, {ButtonShapes, ButtonTypes} from '../../Atoms/Button';
import Input, { InputTypes } from '../../Atoms/Input';
import TextArea from '../../Atoms/TextArea/TextArea';
import Text from '../../Atoms/Text';
import DropDownList, { Items } from '../../Molecules/DropdownList';
import { mockCategories } from './MockCategories'
import { mockTermsOfUse } from './MockTermsOfUse';
import {
    Parent,
    InputForm,
    SkillThumbnail,
    TermsOfUse,
    Buttons,
    OneInputParent,
    InputTitle,
    InputWarning,
    InputElement,
    ButtonsParent,
} from './StyledComponents';
import Color from '../../../styles/Color';

export type SkillPostProps = {

}

const SkillPost: React.FC<SkillPostProps> = (props) => {
    const [ imageUrl, setImageUrl ] = useState('');
    const [ skillName, setSkillName ] = useState('');
    const categoryItem = [{label: 'カテゴリを選択'} , ...new Array<Items>(mockCategories.length).fill({label: ''}).map((item, index) => { return {label: mockCategories[index]} })] as Items[];
    const [ selectedCategory, setSelectedCategory ] = useState(categoryItem[0]);
    const [ skillDescription, setSkillDescription ] = useState('');
    const [ skillPrice, setSkillPrice ] = useState(0);
    const [ isEmpty, setIsEmpty ] = useState(new Array<boolean>(4).fill(true));
    const [ warning, setWarning ] = useState(false);

    const history = useHistory();

    const findEmptyInput = () => {
        setIsEmpty([(skillName === ''), (selectedCategory.label === 'カテゴリを選択'), (skillDescription === ''), (skillPrice === 0)]);
    }

    useEffect(()=>{
        findEmptyInput()
    }, [skillName, selectedCategory, skillDescription, skillPrice]);

    const onClickPostButton = () => {
        if (isEmpty.find(item => item === true)){
            setWarning(true);
            return;
        }
        history.push('/postCompleted');
    }

    const onClickSaveDraftButton = () => {
        history.push('/home');
    }

    const {

    } = props;

    return (
        <Parent>
            <SkillThumbnail>
                <ImageInput imageSize={350} isDeleteButtonVisible={true} deleteButtonSize='Large' imageUrl={imageUrl} setImageUrl={(url)=>{setImageUrl(url)}}/>
            </SkillThumbnail>
            <InputForm>
                <OneInputParent verticalSize={1.5}>
                    <InputTitle>
                        <Text size='Medium' textType='Default' children='スキル名'/>
                    </InputTitle>
                    <InputWarning isVisible={isEmpty[0] && warning}>
                        <Text size='Medium' textType='Danger' children='*必須項目です*'/>
                    </InputWarning>
                    <InputElement>
                        <Input textOnChange={(value) => {setSkillName(value)}} value={skillName} maxLength={50} inputType={InputTypes.text}/>
                    </InputElement>
                </OneInputParent>
                <OneInputParent verticalSize={1.5}>
                    <InputTitle>
                        <Text size='Medium' textType='Default' children='カテゴリ'/>
                    </InputTitle>
                    <InputWarning isVisible={isEmpty[1] && warning}>
                        <Text size='Medium' textType='Danger' children='*必須項目です*'/>
                    </InputWarning>
                    <InputElement>
                        <DropDownList selectItem={selectedCategory} items={categoryItem} onChangedSelectItem={(item)=>{setSelectedCategory(item)}}/>
                    </InputElement>
                </OneInputParent>
                <OneInputParent verticalSize={5}>
                    <InputTitle>
                        <Text size='Medium' textType='Default' children='スキルの説明'/>
                    </InputTitle>
                    <InputWarning isVisible={isEmpty[2] && warning}>
                        <Text size='Medium' textType='Danger' children='*必須項目です*'/>
                    </InputWarning>
                    <InputElement>
                        <TextArea backgroundColor='White' value={skillDescription} onChange={(value) => {setSkillDescription(value)}}/>
                    </InputElement>
                </OneInputParent>
                <OneInputParent verticalSize={1.5}>
                    <InputTitle>
                        <Text size='Medium' textType='Default' children='販売価格'/>
                    </InputTitle>
                    <InputWarning isVisible={isEmpty[3] && warning}>
                        <Text size='Medium' textType='Danger' children='*必須項目です*'/>
                    </InputWarning>
                    <InputElement>
                        <Input type='number' textOnChange={(value) => {if(parseInt(value) < 0 || value === '')return; setSkillPrice(parseInt(value));}} value={skillPrice.toString()} inputType={InputTypes.text}/>
                    </InputElement>
                </OneInputParent>
            </InputForm>
            <TermsOfUse>
                <TextArea disabled={true} backgroundColor='White' onChange={()=>{}} value={mockTermsOfUse}/>
            </TermsOfUse>
            <Buttons>
                <ButtonsParent>
                    <Button handleClick={()=> {onClickSaveDraftButton()}} label='下書きに保存' rounded={true} width={250} buttonShape={ButtonShapes.rect} buttonType={ButtonTypes.secondary}/>
                    <Button handleClick={()=> {onClickPostButton()}} label='スキルを出品する' rounded={true} width={250} buttonShape={ButtonShapes.rect} buttonType={ButtonTypes.primary}/>
                </ButtonsParent>
            </Buttons>
        </Parent>
    );
}

export default SkillPost;