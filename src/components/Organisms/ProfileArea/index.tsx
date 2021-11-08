import React, { useState } from "react";
import { FontSize } from "../../../styles/Font";
import Button, { ButtonTypes } from "../../Atoms/Button";
import Text from "../../Atoms/Text";
import Input from "../../Atoms/Input";
import TextArea from "../../Atoms/TextArea/TextArea";
import ImageInput from "../../Molecules/ImageInput";
import { Container, FlexBox, MarginBox, FlexBoxChild } from './StyledComponents';


export type ProfileAreaProps = {
  userName: string;
  selfIntroduction?: string;
  gmailAddress?: string;
  funMailAddress?: string;
  otherMailAddress?: string;
  lineQrCord?: string;     // LINEのQRコードをどういったデータ型で扱うかわからないです。とりあえずstringにします。あとで修正するかもです。
  imageUrl?: string;
}

const ProfileArea: React.FC<ProfileAreaProps> = (props) => {
  const { userName,
    selfIntroduction = "",
    gmailAddress = "",
    funMailAddress = "",
    otherMailAddress = "",
    lineQrCord = "",
    imageUrl = ""
  } = props;
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [userNameState, setUserNameState] = useState<string>(userName);
  const [selfIntroductionState, setSelfIntroductionState] = useState<string>(selfIntroduction);
  const [gmailAddressState, setGmailAddressState] = useState<string>(gmailAddress);
  const [funMailAddressState, setFunMailAddressState] = useState<string>(funMailAddress);
  const [otherMailAddressState, setOtherMailAddressState] = useState<string>(otherMailAddress);
  const [lineQrCordState, setLineQrCordState] = useState<string>(lineQrCord);
  const [imageUrlState, setImageUrlState] = useState<string>(imageUrl);

  const onChangeUserName = (value: string) => {
    setUserNameState(value);
  }

  const onChangeSelfIntroduction = (value: string) => {
    setSelfIntroductionState(value);
  }

  const onChangeGmailAddress = (value: string) => {
    setGmailAddressState(value);
  }

  const onChangeFunMailAddress = (value: string) => {
    setFunMailAddressState(value);
  }

  const onChangeOtherMailAddress = (value: string) => {
    setOtherMailAddressState(value);
  }

  const onChangeLineQrCord = (value: string) => {
    setLineQrCordState(value);
  }

  return (
    <Container>
      <FlexBox height={184} isSpaceBetween={true} direction='row' >
        <ImageInput imageUrl={imageUrlState} setImageUrl={setImageUrlState} imageSize={184} isEditing={isEditing} isDeleteButtonVisible={isEditing} />
        <MarginBox width={450}>
          <FlexBox height={43} direction='row' isSpaceBetween={true}>
            <FlexBoxChild alignSelf='flex-end'>
              <Input fontSize='Large' value={userNameState} textOnChange={onChangeUserName} width={297} height={35} backgroundColor={isEditing ? 'WhiteSmoke' : 'White'} borderColor={isEditing ? 'Ashen' : 'Black'} isReadOnly={!isEditing} borderWidth={isEditing ? 2 : 1} borderState={isEditing ? 1 : 2} customizedBorderRadius={isEditing ? -1 : 4} inputType={"text"}/>
            </FlexBoxChild>
            <FlexBoxChild alignSelf='flex-start'>
              <Button label={isEditing ? '完了' : '編集'} fontSize={FontSize.Medium} buttonType={isEditing ? ButtonTypes.secondary : ButtonTypes.info} rounded={false} width={89} handleClick={() => setIsEditing(!isEditing)} />
            </FlexBoxChild>
          </FlexBox>
          <MarginBox marginTop={24}>
            <TextArea fontSize='Small' value={selfIntroductionState} onChange={onChangeSelfIntroduction} height={86} backgroundColor={isEditing ? 'WhiteSmoke' : 'White'} borderColor={isEditing ? 'Ashen' : 'Black'} isReadOnly={!isEditing} borderWidth={isEditing ? 2 : 1} borderState={isEditing ? 1 : 2} borderRadius={isEditing ? -1 : 4} />
          </MarginBox>
        </MarginBox>
      </FlexBox>
      <MarginBox marginTop={38} marginBottom={24} height={17}>
        <Text children='登録している連絡先' size='Small' textType='Default' />
      </MarginBox>
      <MarginBox height={24} width={421} marginBottom={11}>
        <FlexBox direction='row' isSpaceBetween={true}>
          <Text children='Gmail' size='Small' textType='Tag' />
          <Input fontSize='Small' value={gmailAddressState} textOnChange={onChangeGmailAddress} width={242} backgroundColor={isEditing ? 'WhiteSmoke' : 'White'} borderColor={isEditing ? 'Ashen' : 'Black'} isReadOnly={!isEditing} borderWidth={isEditing ? 2 : 1} borderState={isEditing ? 1 : 2} customizedBorderRadius={isEditing ? -1 : 4} inputType={"text"}/>
        </FlexBox>
      </MarginBox>
      <MarginBox height={24} width={421} marginBottom={11}>
        <FlexBox direction='row' isSpaceBetween={true}>
          <Text children='学内メール' size='Small' textType='Tag' />
          <Input fontSize='Small' value={funMailAddressState} textOnChange={onChangeFunMailAddress} width={242} backgroundColor={isEditing ? 'WhiteSmoke' : 'White'} borderColor={isEditing ? 'Ashen' : 'Black'} isReadOnly={!isEditing} borderWidth={isEditing ? 2 : 1} borderState={isEditing ? 1 : 2} customizedBorderRadius={isEditing ? -1 : 4} inputType={"text"}/>
        </FlexBox>
      </MarginBox>
      <MarginBox height={24} width={421} marginBottom={11}>
        <FlexBox direction='row' isSpaceBetween={true}>
          <Text children='その他' size='Small' textType='Tag' />
          <Input fontSize='Small' value={otherMailAddressState} textOnChange={onChangeOtherMailAddress} width={242} backgroundColor={isEditing ? 'WhiteSmoke' : 'White'} borderColor={isEditing ? 'Ashen' : 'Black'} isReadOnly={!isEditing} borderWidth={isEditing ? 2 : 1} borderState={isEditing ? 1 : 2} customizedBorderRadius={isEditing ? -1 : 4} inputType={"text"}/>
        </FlexBox>
      </MarginBox>
      <MarginBox height={24} width={421} marginBottom={11}>
        <FlexBox direction='row' isSpaceBetween={true}>
          <Text children='LINE' size='Small' textType='Tag' />
          <Input fontSize='Small' value={lineQrCordState} textOnChange={onChangeLineQrCord} width={242} backgroundColor={isEditing ? 'WhiteSmoke' : 'White'} borderColor={isEditing ? 'Ashen' : 'Black'} isReadOnly={!isEditing} borderWidth={isEditing ? 2 : 1} borderState={isEditing ? 1 : 2} customizedBorderRadius={isEditing ? -1 : 4} inputType={"text"}/>
        </FlexBox>
      </MarginBox>
      <FlexBox height={210} isSpaceBetween={true} direction='row' />
    </Container>
  );
}

export default ProfileArea;