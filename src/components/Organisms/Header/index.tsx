import React, { useState } from 'react';
// Atoms
import Icon from '../../Atoms/Icon';
import Logo from '../../Atoms/Logo';
// Moloecules
import SearchBox from '../../Molecules/SearchBox';
// Styled Components
import {
  Wrapper,
  LogoWrapper,
  AlertWrapper,
  RightWrapper,
} from './styledComponents';

export type Props = {
  isSerchBox: boolean;
}

const Header: React.FC<Props> = (props) => {
  const { isSerchBox } = props;
  const [searchValue, setSearchValue] = useState('');
  return (
    <Wrapper>
      <LogoWrapper>
        <Logo />
      </LogoWrapper>
      <SearchBox handleSearchValue={(_) => { setSearchValue(_) }} value={searchValue} disable={!isSerchBox} />
      <RightWrapper>
        <Icon type="MdAccountCircle" size="H2" handleClick={() => console.log("ここをクリックするとアカウント作成")} />
        <AlertWrapper>
          <Icon type="MdNotifications" size="H2" handleClick={() => console.log("ここをクリックするとお知らせ表示")} />
        </AlertWrapper>
      </RightWrapper>
    </Wrapper>
  );
}

export default Header