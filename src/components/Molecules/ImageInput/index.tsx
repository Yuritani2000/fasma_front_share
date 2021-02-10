import React, { useState, useEffect } from 'react';
import Image, { ImageSize } from '../../Atoms/Image/Image';
import FileInput from './MockAtoms/FileInput';
import Button, {ButtonTypes} from '../../Atoms/Button';
import { FontSize } from '../../../styles/Font';
import ImageInputParent from './StyledComponents/ImageInputParent';
import StyledLabel ,{ StyledLabelProps }from './StyledComponents/StyledLabel';
import ButtonParent from './StyledComponents/ButtonParent';



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

export type ImageInputProps = {
    size?: number;
    sizeTypes?: keyof typeof ImageSize;
    maxDataSizeMegaByte?: number;
    styledLabelArguments?: StyledLabelProps; 
    shouldShowDeleteButton?: boolean;
    uploadButtonLabel?: string;
    deleteButtonSize?: keyof typeof FontSize;
}

const ImageInput: React.FC<ImageInputProps> = (props) => {
    const {size = 100, 
           sizeTypes = 'MEDIUM', 
           maxDataSizeMegaByte = 10, 
           styledLabelArguments = { color: 'Black',
                                    backgroundColor: 'WhiteSmoke',
                                    borderColor: 'Border',
                                    borderWidth: 2,
                                    isRounded: true,
                                    padding: 5,
                                    width: 20,
                                    height: 20,
                                    isBold: true,
                                    fontSize: 'Large',
                                },
           shouldShowDeleteButton = false,
           uploadButtonLabel = '＋',
           deleteButtonSize = 'Small'
          } = props;
    const [image, setImage] = useState<File>();
    const [imageUrl, setImageUrl] = useState<string>('');
    const [value, setValue] = useState<string>('');

    const onChangeImageInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log('onChange発火');
        setValue(e.target.value);
        let files = e.target.files;
        if(files === null || files.length === 0){
            console.log("ファイルがnull");
            return;
        }else if(files[0].size > maxDataSizeMegaByte * 1024 * 1024){
            alert("ファイルサイズ: " + files[0].size + "バイト.\nファイルサイズが大きすぎます.\nファイルサイズ上限は" + maxDataSizeMegaByte + "MBまでです.");
            return;
        }
        console.log('setImageを発火');
        setImage(files[0]);
    }

    const createUrl = () => {
        if(image != null) {
            console.log('urlを作成');
            const url = URL.createObjectURL(image);
            setImageUrl(url);
        }else{
            console.log("imageがnull")
            setImageUrl('');
        }
    }

    const deleteUrl = () => {
        console.log('urlを削除');
        URL.revokeObjectURL(imageUrl);
        setImageUrl('');
        setValue('');
    }

    useEffect(createUrl, [image]);

    return(
        <ImageInputParent size={size} sizeTypes={sizeTypes}>
            <Image url={imageUrl} size={size} sizeTypes={sizeTypes}/>
            <StyledLabel color={styledLabelArguments.color}
                         backgroundColor={styledLabelArguments.backgroundColor}
                         borderColor={styledLabelArguments.borderColor}
                         borderWidth={styledLabelArguments.borderWidth}
                         isRounded={styledLabelArguments.isRounded}
                         padding={styledLabelArguments.padding}
                         customizedBorderRadius={styledLabelArguments.customizedBorderRadius}
                         topPositionPercentage={styledLabelArguments.topPositionPercentage}
                         leftPositionPercentage={styledLabelArguments.leftPositionPercentage}
                         isVisible={styledLabelArguments.isVisible}
                         width={styledLabelArguments.width}
                         height={styledLabelArguments.height}
                         isBold={styledLabelArguments.isBold}
                         fontSize={styledLabelArguments.fontSize}
                         opacity={styledLabelArguments.opacity}>
                             {uploadButtonLabel}
                <FileInput value={value} accept='image/*' id='input-image' onChange={onChangeImageInput} noDisplay={true}/>
            </StyledLabel>
            <ButtonParent isDisabled={(shouldShowDeleteButton && imageUrl != '' ) ? false : true}>
                <Button label='削除' size={FontSize[deleteButtonSize]} width={deleteButtonSizes[deleteButtonSize]} rounded={false} buttonType={ButtonTypes.danger} handleClick={deleteUrl}/>
            </ButtonParent>
        </ImageInputParent>
    );
} 

export default ImageInput;