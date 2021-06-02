import React, { useState } from 'react';
// Atoms
import Text from '../../Atoms/Text';
import Button, { ButtonShapes, ButtonTypes } from '../../Atoms/Button';
import Input from '../../Atoms/Input';
// Moloecules
import DropdownList, { Items } from '../../Molecules/DropdownList';
// Styled Components
import {
  Wrapper,
  TitleWrapper,
  CategoryWrapper,
  PriceWrapper,
  PriceInputWrapper,
  DaysWrapper,
  ButtonWrapper,
} from './styledComponents';


export type Props = {
  Category: Items[];
}

const DetailedSearchBox: React.FC<Props> = (props) => {
  const { Category } = props;
  const [minPriceValue, setMinPriceValue] = useState('');
  const [maxPriceValue, setMaxPriceValue] = useState('');
  const [selectCategoryValue, setSelectCategoryValue] = useState<Items>({ label: '' });
  const [selectDayValue, setSelectDayValue] = useState<Items>({ label: '' });
  function onChangedCategoryItem(_: Items) {
    setSelectCategoryValue(_);
  }
  function onChangedDayItem(_: Items) {
    setSelectDayValue(_)
  }
  return (
    <Wrapper>
      <TitleWrapper>
        <Text textType={"Default"} size={"H3"} children={"詳細検索"} textAlign={"center"} />
      </TitleWrapper>
      <CategoryWrapper>
        <Text textType={"Default"} size={"Medium"} children={"カテゴリを選択"} />
        <DropdownList placeholder={"すべて"} selectItem={selectCategoryValue} items={Category} isBoxShadow={false} onChangedSelectItem={onChangedCategoryItem} />
      </CategoryWrapper>
      <PriceWrapper>
        <Text textType={"Default"} size={"Medium"} children={"価格"} />
        <PriceInputWrapper>
          <Input value={minPriceValue} placeholder={"min"}　width={120} onChange={setMinPriceValue} />
          <Text textType={"Default"} size={"Medium"} children={"〜"} />
          <Input value={maxPriceValue} placeholder={"max"} width={120} onChange={setMaxPriceValue} />
        </PriceInputWrapper>
      </PriceWrapper>
      <DaysWrapper>
        <Text textType={"Default"} size={"Medium"} children={"提供までの日数"} />
        <DropdownList placeholder={"指定なし"}　selectItem={selectDayValue} items={[{ label: "1" }]} isBoxShadow={false} onChangedSelectItem={onChangedDayItem} />
      </DaysWrapper>
      <ButtonWrapper>
        <Button label={"クリア"} width={120} rounded={true} buttonShape={ButtonShapes.rect} buttonType={ButtonTypes.info} />
        <Button label={"絞り込む"} width={120} rounded={true} buttonShape={ButtonShapes.rect} buttonType={ButtonTypes.primary} />
      </ButtonWrapper>
    </Wrapper>
  );
}

export default DetailedSearchBox;