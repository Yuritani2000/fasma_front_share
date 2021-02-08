import React from 'react';
import styled from 'styled-components';

export type FileInputProps = {
    accept: string;
    id?: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>)=> void
}

const FileInput: React.FC<FileInputProps> = (props) => {
    const {accept, id = 'file-input', onChange} = props;

    return (
        <StyledInput accept={accept} type='file' id={id} onChange={onChange}/>
    )
}

const StyledInput = styled.input(()=> `
`);

export default FileInput;