import React, { useState, useEffect } from 'react';
import Image, { ImageSize } from '../../Atoms/Image/Image';
import FileInput from './../../Atoms/FileInput/index';
import Button, {ButtonTypes} from '../../Atoms/Button';
import { FontSize } from '../../../styles/Font';
import ImageInputParent from './StyledComponents/ImageInputParent';
import StyledLabel from './StyledComponents/StyledLabel';
import ButtonParent from './StyledComponents/ButtonParent';
import Color from '../../../styles/Color';
import Icon from '../../Atoms/Icon';
import styled from 'styled-components';

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
    isDeleteButtonVisible?: boolean;
    deleteButtonSize?: keyof typeof FontSize;
    imageUrl: string;
    setImageUrl: (url: string) => void;
    isEditing?: boolean;
}

const ImageInput: React.FC<ImageInputProps> = (props) => {
    const {size = 100,
           sizeTypes = 'MEDIUM',
           maxDataSizeMegaByte = 10,
           isDeleteButtonVisible = false,
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
            <StyledLabel noDisplay={!isEditing}>
                <IconParent>
                    <IconPosition>
                        <Icon type='MdAdd' size='H1'/>
                    </IconPosition>
                </IconParent>
                <FileInput value={value} accept='image/*' id='input-image' onChange={onChangeImageInput} noDisplay={true} disabled={!isEditing}/>
            </StyledLabel>
            <ButtonParent isDisabled={(isDeleteButtonVisible && imageUrl != '' ) ? false : true}>
                <Button label='削除' size={FontSize[deleteButtonSize]} width={deleteButtonSizes[deleteButtonSize]} rounded={false} buttonType={ButtonTypes.danger} handleClick={deleteUrl}/>
            </ButtonParent>
        </ImageInputParent>
    );
}

export default ImageInput;

const IconParent = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
`;

const IconPosition = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;