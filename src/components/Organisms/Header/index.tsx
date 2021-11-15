import React, { useState } from 'react';
import browserHistory from '../../../utils/history';
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
import { useHistory } from 'react-router-dom';
import { clickNavigationMenu } from '../../../actions/NavigationMenu/ActionCreator';
import { NavigationMenuContent } from '../../../states/NavigationMenu';

export type Props = {
  isSearchBox?: boolean;
}

const Header: React.FC<Props> = (props) => {
  const { isSearchBox = true } = props;

  //TODO: あんまいいやり方じゃないのでようcheck
  let query: string | null = '';
  if (browserHistory.location.pathname === "/skillList") {
    let params = new URLSearchParams(browserHistory.location.search);
    query = params.get("search_query") ? params.get("search_query") : '';
  }

  const history = useHistory()
  const [searchValue, setSearchValue] = useState<string>(query ? query : '');
  const dispatch = useDispatch();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    browserHistory.push(`/skillList?search_query=${searchValue}`);
    //TODO: ここのリクエストの仕方は変える?
    dispatch(getSkills.request({ tag: searchValue, token: "hoge" }));
  }

  const handleClickLogo = () => {
    history.push('/home')
  }

  const handleClickAccountIcon = () => {
    history.push(`/${NavigationMenuContent.Profile}`)
    dispatch(clickNavigationMenu({ enLabel: NavigationMenuContent.Profile }))
  }

  const handleClickNotificationIcon = () => {
    history.push(`/${NavigationMenuContent.Notice}`)
    dispatch(clickNavigationMenu({ enLabel: NavigationMenuContent.Notice }))
  }

  return (
    <Wrapper>
      <LogoWrapper onClick={handleClickLogo}>
        <Logo />
      </LogoWrapper>
      <SearchBox handleSearchValue={(_) => { setSearchValue(_) }} handleSubmit={handleSubmit} value={searchValue} disable={!isSearchBox} placeholder={"探しているスキルは何ですか?"} />
      <RightWrapper>
        <Icon type="MdAccountCircle" size="H2" handleClick={handleClickAccountIcon} />
        <AlertWrapper>
          <Icon type="MdNotifications" size="H2" handleClick={handleClickNotificationIcon} />
        </AlertWrapper>
      </RightWrapper>
    </Wrapper>
  );
}

export default Header
