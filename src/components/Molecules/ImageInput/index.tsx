import React, { useState, useEffect } from 'react';
import Image, { ImageSize } from '../../Atoms/Image/Image';
import FileInput from './../../Atoms/FileInput/index';
import Button, {ButtonTypes} from '../../Atoms/Button';
import { FontSize } from '../../../styles/Font';
import ImageInputParent from './StyledComponents/ImageInputParent';
import StyledLabel ,{ StyledLabelProps } from './StyledComponents/StyledLabel';
import ButtonParent from './StyledComponents/ButtonParent';
import Color from '../../../styles/Color';

enum deleteButtonSizes {
    Tiny = 40,
    Small = 55,
    Medium = 70,
    Large = 90,
    H4 = 50,
    H3 = 80,
    H2 = 110,
    H1 = 120,
}

export enum UploadButtonShapeTypes {
    Rounded = 'Rounded',
    Rectangle = 'Rectangle',
}

export type ImageInputProps = {
    size?: number;
    sizeTypes?: keyof typeof ImageSize;
    maxDataSizeMegaByte?: number;
    uploadButtonPadding?: number;
    uploadButtonVerticalPosition?: string;
    uploadButtonHorizontalPosition?: string;
    uploadButtonWidth?: number;
    uploadButtonHeight?: number;
    uploadButtonShape?: UploadButtonShapeTypes;
    uploadButtonBackgroundColor?: keyof typeof Color;
    uploadButtonTextColor?: keyof typeof Color;
    uploadButtonTextIsBold?: boolean;
    uploadButtonTextSize?: keyof typeof FontSize;
    uploadButtonBorderColor?: keyof typeof Color;
    uploadButtonBorderWidth?: number;
    uploadButtonOpacity?: number;
    isDeleteButtonVisible?: boolean;
    uploadButtonLabel?: string;
    deleteButtonSize?: keyof typeof FontSize;
    imageUrl: string;
    setImageUrl: (url: string) => void;
    isEditing?: boolean;
}

const ImageInput: React.FC<ImageInputProps> = (props) => {
    const {size = 100,
           sizeTypes = 'MEDIUM',
           maxDataSizeMegaByte = 10,
            uploadButtonPadding = 5,
            uploadButtonVerticalPosition = 'calc(100% - 30px)',
            uploadButtonHorizontalPosition = 'calc(100% - 30px)',
            uploadButtonWidth = 20,
            uploadButtonHeight = 20,
            uploadButtonShape = 'Rounded',
            uploadButtonBackgroundColor = 'WhiteSmoke',
            uploadButtonTextColor = 'Black',
            uploadButtonTextIsBold = true,
            uploadButtonTextSize = 'Large',
            uploadButtonBorderColor = 'Border',
            uploadButtonBorderWidth = 2,
            uploadButtonOpacity = 1.0,
           isDeleteButtonVisible = false,
           uploadButtonLabel = '＋',
           deleteButtonSize = 'Small',
           imageUrl,
           setImageUrl,
           isEditing = true,
          } = props;
    const [image, setImage] = useState<File>();
    const [value, setValue] = useState<string>('');

    const onChangeImageInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
        let files = e.target.files;
        if(files === null || files.length === 0){
            return;
        }else if(files[0].size > maxDataSizeMegaByte * 1024 * 1024){
            alert("ファイルサイズ: " + files[0].size + "バイト.\nファイルサイズが大きすぎます.\nファイルサイズ上限は" + maxDataSizeMegaByte + "MBまでです.");
            return;
        }
        setImage(files[0]);
    }

    const createUrl = () => {
        if(image != null) {
            const url = URL.createObjectURL(image);
            setImageUrl(url);
        }else{
            console.log("Imageが空だよ");
        }
    }

    const deleteUrl = () => {
        URL.revokeObjectURL(imageUrl);
        setImageUrl('');
        setValue('');
    }

    useEffect(createUrl, [image]);

    return(
        <ImageInputParent size={size} sizeTypes={sizeTypes}>
            <Image url={imageUrl} size={size} sizeTypes={sizeTypes}/>
            <StyledLabel color={uploadButtonTextColor ?  uploadButtonTextColor :  'Black'}
                         backgroundColor={uploadButtonBackgroundColor ? uploadButtonBackgroundColor : 'WhiteSmoke' }
                         borderColor={uploadButtonBorderColor ? uploadButtonBorderColor : 'Border' }
                         borderWidth={uploadButtonBorderWidth ? uploadButtonBorderWidth < 0 ? 0 : uploadButtonBorderWidth : uploadButtonBorderWidth <= 0 ? 0 : 2}
                         isRounded={ (UploadButtonShapeTypes[uploadButtonShape] === UploadButtonShapeTypes.Rectangle) ? false: true}
                         padding={uploadButtonPadding ? uploadButtonPadding : 5}
                         verticalPosition={uploadButtonVerticalPosition ? uploadButtonVerticalPosition : 'calc(100% - 30px)'}
                         horizontalPosition={uploadButtonHorizontalPosition ? uploadButtonHorizontalPosition : 'calc(100% - 30px)' }
                         width={uploadButtonWidth ? uploadButtonWidth : 20 }
                         height={uploadButtonHeight ? uploadButtonHeight : 20}
                         isBold={uploadButtonTextIsBold ? uploadButtonTextIsBold : uploadButtonTextIsBold === false ? false : true}
                         fontSize={uploadButtonTextSize ? uploadButtonTextSize : 'Large'}
                         opacity={uploadButtonOpacity ? uploadButtonOpacity : 1.0}>
                             {uploadButtonLabel ? uploadButtonLabel : '＋'}
                <FileInput value={value} accept='image/*' id='input-image' onChange={onChangeImageInput} noDisplay={true} disabled={!isEditing}/>
            </StyledLabel>
            <ButtonParent isDisabled={(isDeleteButtonVisible && imageUrl != '' ) ? false : true}>
                <Button label='削除' size={FontSize[deleteButtonSize]} width={deleteButtonSizes[deleteButtonSize]} rounded={false} buttonType={ButtonTypes.danger} handleClick={deleteUrl}/>
            </ButtonParent>
        </ImageInputParent>
    );
}

export default ImageInput;