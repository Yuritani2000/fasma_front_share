import React from 'react';
import Input from '../../Atoms/Input';

// Styled Components
import {
  Wrapper
} from './styledComponents';

export type Props = {
  value: string;
  handleSearchValue: (value: string) => void;
  disable?: boolean;
  placeholder?: string;
}

const SearchBox: React.FC<Props> = (props) => {
  const { value, handleSearchValue, disable = false, placeholder } = props
  return (
    disable ? <></>
      : <Wrapper>
        <Input onChange={handleSearchValue} value={value} fontSize='Small' height={20} maxLength={60} backgroundColor='SerchBox' borderColor='Border' placeholder={placeholder} />
      </Wrapper>
  );
}

export default SearchBox;