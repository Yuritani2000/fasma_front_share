import React from 'react';
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
  searchValue: string;
  handleSearchValue: (value: string) => void;
  isSerchBox: boolean;
}

const Header: React.FC<Props> = (props) => {
  const { searchValue, handleSearchValue, isSerchBox } = props;
  return (
    <Wrapper>
      <LogoWrapper>
        <Logo />
      </LogoWrapper>
      <SearchBox handleSearchValue={() => handleSearchValue} value={searchValue} disable={!isSerchBox} />
      <RightWrapper>
        <Icon type="MdAccountCircle" handleClick={() => console.log("ここをクリックするとアカウント作成")} />
        <AlertWrapper>
          <Icon type="MdNotifications" handleClick={() => console.log("ここをクリックするとお知らせ表示")} />
        </AlertWrapper>
      </RightWrapper>
    </Wrapper>
  );
}

export default Header