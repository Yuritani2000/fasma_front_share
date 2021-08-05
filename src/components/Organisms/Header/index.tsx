import React, { useState } from 'react';
import history from '../../../utils/history';
import { useDispatch } from "react-redux";
// Atoms
import Icon from '../../Atoms/Icon';
import Logo from '../../Atoms/Logo';
// Moloecules
import SearchBox from '../../Molecules/SearchBox';
//Action
import { getSkills } from '../../../actions/Skills/ActionCreator';
// Styled Components
import {
  Wrapper,
  LogoWrapper,
  AlertWrapper,
  RightWrapper,
} from './styledComponents';

export type Props = {
  isSearchBox: boolean;
}

const Header: React.FC<Props> = (props) => {
  const { isSearchBox } = props;
  //TODO: あんまいいやり方じゃないのでようcheck
  let query: string | null = '';
  if (history.location.pathname === "/skillList") {
    let params = new URLSearchParams(history.location.search);
    query = params.get("search_query")?params.get("search_query"):'';
  }
  const [searchValue, setSearchValue] = useState<string>(query?query:'');
  const dispatch = useDispatch();
  const handleSubmit = (e: any) => {
    e.preventDefault();
    history.push(`/skillList?search_query=${searchValue}`);
    //TODO: ここのリクエストの仕方は変える?
    dispatch(getSkills.request({ tag: searchValue, token: "hoge" }));
  }
  return (
    <Wrapper>
      <LogoWrapper>
        <Logo />
      </LogoWrapper>
      <SearchBox handleSearchValue={(_) => { setSearchValue(_) }} handleSubmit={handleSubmit} value={searchValue} disable={!isSearchBox} placeholder={"探しているスキルは何ですか?"} />
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