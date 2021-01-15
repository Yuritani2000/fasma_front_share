import React from 'react';
import Input from '../../Atoms/Input';

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
        <Input onChange={handleSearchValue} value={value} fontSize='Small' maxLength={60} backgroundColor='SerchBox' borderColor='Border' placeholder={placeholder} />
      </Wrapper>
  );
}

export default SearchBox;