import React from 'react';
import Input, { InputTypes } from '../../Atoms/Input';

// Styled Components
import {
  Wrapper
} from './styledComponents';

export type Props = {
  value: string;
  handleSearchValue: (value: string) => void;
  handleSubmit: (e: any) => void;
  disable?: boolean;
  placeholder?: string;
}

const SearchBox: React.FC<Props> = (props) => {
  const { value, handleSearchValue, handleSubmit, disable = false, placeholder } = props
  return (
    disable ? <></>
      : <Wrapper onSubmit={handleSubmit}>
        <Input textOnChange={handleSearchValue} value={value} fontSize='Small' maxLength={60} backgroundColor='SerchBox' borderColor='Border' placeholder={placeholder} inputType={InputTypes.text}/>
      </Wrapper>
  );
}

export default SearchBox;