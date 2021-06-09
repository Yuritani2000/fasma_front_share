import React, { useState } from 'react';
import history from '../../../utils/history';
// Atoms
import Text from '../../Atoms/Text';
// Moloecules
import DropdownList, { Items } from '../../Molecules/DropdownList';
// Styled Components
import {
  Wrapper,
} from './styledComponents';

export type Props = {
}

const SkillListResultSetting: React.FC<Props> = (props) => {
  //TODO: あんまいいやり方じゃないのでようcheck
  let query: string | null = '';
  if (history.location.pathname === "/skillList") {
    let params = new URLSearchParams(history.location.search);
    query = params.get("search_query")?params.get("search_query"):'';
  }
  //const [searchValue, setSearchValue] = useState<string>(query?query:'');
  const [selectSortValue, setSelectSortValue] = useState<Items>({ label: '' });
  function onChangedSortItem(_: Items) {
    setSelectSortValue(_)
  }
  return (
    <Wrapper>
        <Text textType={"Default"} size={"H2"} children={`「${query}」`}/>
        <Text textType={"Default"} size={"H2"} children={"の検索結果"}/>
        <DropdownList placeholder={"並び替え"} selectItem={selectSortValue} items={[{ label: "新着順" },{ label: "古い順" },{ label: "人気順" }]} isBoxShadow={false} onChangedSelectItem={onChangedSortItem} />
    </Wrapper>
  );
}

export default SkillListResultSetting;