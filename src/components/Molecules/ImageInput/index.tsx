import React from 'react';
import Image, { ImageSize } from '../../Atoms/Image/Image';
import FileInput from './../../Atoms/FileInput/index';
import Button, {ButtonTypes} from '../../Atoms/Button';
import { FontSize } from '../../../styles/Font';
import Icon from '../../Atoms/Icon';
import { ButtonParent, ImageInputParent, StyledLabel, IconParent, IconPosition } from './StyledComponents';

export type ImageInputProps = {
    imageSize?: number;
    imageSizeType?: keyof typeof ImageSize;
    maxDataSizeMegaByte?: number;
    isDeleteButtonVisible?: boolean;
    deleteButtonSize?: keyof typeof FontSize;
    imageUrl?: string;
    setImageUrl: (url: string) => void;
    isEditing?: boolean;
}

const ImageInput: React.FC<ImageInputProps> = (props) => {
    const {
            imageSize = 100,
            imageSizeType = 'MEDIUM',
            maxDataSizeMegaByte = 10,
            isDeleteButtonVisible = false,
            deleteButtonSize = 'Small',
            imageUrl = '',
            setImageUrl,
            isEditing = true,
          } = props;

    const onChangeImageInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        let files = e.target.files;
        if(files === null || files.length === 0){
            return;
        }else if(files[0].size > maxDataSizeMegaByte * 1024 * 1024){
            alert("ファイルサイズが大きすぎます。: " + files[0].size + "バイト.\nファイルサイズ上限は" + maxDataSizeMegaByte + "MBまでです.");
            return;
        }
        if(files[0] != null) {
            const url = URL.createObjectURL(files[0]);
            setImageUrl(url);
        }
    }

    const deleteUrl = () => {
        URL.revokeObjectURL(imageUrl);
        setImageUrl('');
    }

    return(
        <ImageInputParent size={imageSize} sizeTypes={imageSizeType}>
            <Image url={imageUrl} size={imageSize} sizeTypes={imageSizeType}/>
            <StyledLabel isDisplaying={isEditing}>
                <IconParent>
                    <IconPosition>
                        <Icon type='MdAdd' size='H1'/>
                    </IconPosition>
                </IconParent>
                <FileInput value='' accept='.jpg, .jpeg, .png' id='input-image' onChange={onChangeImageInput} noDisplay={true} disabled={!isEditing}/>
            </StyledLabel>
            <ButtonParent isEnabled={(isDeleteButtonVisible && imageUrl != '' )}>
                <Button label='削除' size={FontSize[deleteButtonSize]} rounded={false} buttonType={ButtonTypes.danger} handleClick={deleteUrl}/>
            </ButtonParent>
        </ImageInputParent>
    );
}

export default ImageInput;