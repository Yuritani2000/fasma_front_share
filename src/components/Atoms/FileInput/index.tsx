import React from 'react';
import styled from 'styled-components';

export type FileInputProps = {
    accept: string;
    id?: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>)=> void;
    noDisplay?: boolean;
    value: string;
    disabled?: boolean;
}

const FileInput: React.FC<FileInputProps> = (props) => {
    const {accept, id = 'file-input', onChange, noDisplay, value, disabled = false} = props;

    return (
        <StyledInput value={value} accept={accept} type='file' id={id} onChange={onChange} noDisplay={noDisplay} disabled={disabled}/>
    )
}

const StyledInput = styled.input<{noDisplay?: boolean}>((props)=> `
    display: ${(props.noDisplay) ? 'none' : 'inline'};
`);

export default FileInput;