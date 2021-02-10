import React, { useState, useEffect } from 'react';
import Image, { ImageSize } from '../../Atoms/Image/Image';
import FileInput from './MockAtoms/FileInput';
import Button, {ButtonTypes} from '../../Atoms/Button';
import { FontSize } from '../../../styles/Font';
import ImageInputParent from './StyledComponents/ImageInputParent';


export type ImageInputProps = {
    size?: number;
    sizeTypes?: keyof typeof ImageSize;
    maxDataSizeMegaByte?: number;
}

const ImageInput: React.FC<ImageInputProps> = (props) => {
    const {size = 100, sizeTypes = 'MEDIUM', maxDataSizeMegaByte = 10} = props;
    const [image, setImage] = useState<File>();
    const [imageUrl, setImageUrl] = useState<string>('');

    const onChangeImageInput = (e: React.ChangeEvent<HTMLInputElement>) => {
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
            setImageUrl('');
        }
    }

    const deleteUrl = () => {
        URL.revokeObjectURL(imageUrl);
        setImageUrl('');
    }

    useEffect(createUrl, [image]);

    return(
        <ImageInputParent size={size} sizeTypes={sizeTypes}>
            <Image url={imageUrl} size={size} sizeTypes={sizeTypes}/>
            <FileInput accept='image/*' id='input-image' onChange={onChangeImageInput} noDisplay={false}/>
            <Button label='画像を削除' buttonType={ButtonTypes.danger} size={FontSize.Medium} handleClick={deleteUrl}/>
        </ImageInputParent>
    );
} 

export default ImageInput;