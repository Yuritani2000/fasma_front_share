import React from 'react';
import styled from 'styled-components';

export type FileInputProps = {
    accept: string;
    id?: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>)=> void;
    noDisplay?: boolean;
    disabled?: boolean;
}

const FileInput: React.FC<FileInputProps> = (props) => {
    const {accept, id = 'file-input', onChange, noDisplay, disabled = false} = props;

    return (
        <StyledInput accept={accept} type='file' id={id} onChange={onChange} noDisplay={noDisplay} disabled={disabled}/>
    )
}

const StyledInput = styled.input<{noDisplay?: boolean}>((props)=> `
    display: ${(props.noDisplay) ? 'none' : 'inline'};
`);

export default FileInput;