import React, { useState } from 'react';
import Image, { ImageSize } from '../../Atoms/Image/Image';
import FileInput from './MockAtoms/FileInput';


export type ImageInputProps = {
    size?: number;
    sizeTypes?: keyof typeof ImageSize;
    maxDataSizeMegaByte?: number;
}

const ImageInput: React.FC<ImageInputProps> = (props) => {
    const {size = 100, sizeTypes = 'MEDIUM', maxDataSizeMegaByte = 10} = props;
    const [image, setImage] = useState<File>();

    const onChangeImageInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        let files = e.target.files;
        if(files === null || files.length === 0){
            return;
        }else if(files[0].size > maxDataSizeMegaByte * 1024 * 1024){
            alert("ファイルサイズ: " + files[0].size + "バイト.\nファイルサイズが大きすぎます。");
            return;
        }
        setImage(files[0]);
    }

    const createUrl = () => {
        if(image != null) {
            return URL.createObjectURL(image);
        }else{
            return '';
        }
    }
    return(
        <>
            <Image url={createUrl()} size={size} sizeTypes={sizeTypes}/>
            <FileInput accept='image/*' id='input-image' onChange={onChangeImageInput}/>
        </>
    );
} 

export default ImageInput;