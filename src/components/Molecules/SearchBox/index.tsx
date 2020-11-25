import React from 'react';
import Input from '../../Atoms/Input';

// Styled Components
import {
  Wrapper
} from './styledComponents';

export type Props = {
  value: string;
  handleSearchValue: (value: string) => void;
  disable: boolean;
}

const SearchBox: React.FC<Props> = (props) => {
  const { value, handleSearchValue, disable } = props
  return (
    disable ? <></>
      : <Wrapper>
        <Input onChange={handleSearchValue} value={value} fontSize='Small' height={20} maxLength={60} backgroundColor='SerchBox' borderColor='Border' />
      </Wrapper>
  );
}

export default SearchBox;