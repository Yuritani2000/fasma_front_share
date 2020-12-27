import React, { useState, useCallback } from 'react';
import { FontSize, FontFamily } from '../../../styles/Font';
// Styled Components
import {
    Wrapper,
    ItemWrapper,
    ItemsWrapper,
    DropDownButton,
    SelectedLabel,
    UnSelectedLabel,
    SelectedText
} from './styledComponents';

export interface Items {
    label: string,
}

export type Props = {
    items: Items[];
    selectItem: Items; //TODO:何があるか分からん.APIの設計書を確認すべし
    onChangedSelectItem: (_: Items) => void;
    width?: number;
    height?: number;
    fontSize?: keyof typeof FontSize;
    fontFamily?: FontFamily;
}

const DropDownList: React.FC<Props> = (props) => {
    const { items, onChangedSelectItem, selectItem, width, height } = props;
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const toggleDropdownOpen = useCallback(() => {
        setIsDropdownOpen(!isDropdownOpen);
        //TODO: ここにCallBackを書いて、選択したラベルを変更する ここマジで意味ないw
    }, [isDropdownOpen]);
    //const selectItem = items.find(_=>_.isSelected === true);
    const ItemList = items.map((item, index) => {
        // ここはAtoms
        const isSelect: boolean = item.label === selectItem.label
        return (<ItemWrapper onClick={() => onChangedSelectItem(item)} isSelected={isSelect} key={index}>
            {isSelect ?
                <SelectedLabel>{item.label}</SelectedLabel>
                :
                <UnSelectedLabel>{item.label}</UnSelectedLabel>
            }
        </ItemWrapper>
        )
    });

    return (
        <Wrapper onClick={isDropdownOpen?toggleDropdownOpen:()=>{}}  isDropdownOpen={isDropdownOpen}>
            <DropDownButton onClick={toggleDropdownOpen} className="ui dropdown" isDropdownOpen={isDropdownOpen}>
                <SelectedText>{selectItem ? selectItem.label : "選択してください"}</SelectedText>
                <ItemsWrapper isDropdownOpen={isDropdownOpen}>
                    {isDropdownOpen ? ItemList : <></>}
                </ItemsWrapper>
            </DropDownButton>
        </Wrapper>
    );
}

DropDownList.defaultProps = {
    fontSize: 'Medium',
}

export default DropDownList;