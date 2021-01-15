import styled from "styled-components";

// utils
import Space from "../../../styles/Space";
import Color from "../../../styles/Color";
import { FontSize, FontFamily } from "../../../styles/Font";

export const ItemWrapper = styled.div<{onClick?:() => void, isSelected?:boolean}>(props =>`
  display: flex;
  align-items: center;
  cursor: pointer;
  background: white;
  padding: ${Space.TINY} ${Space.SMALL};
  border-top: 1px solid #fafafa;
  &:hover {
    background: ${Color.Hover};
  }
  > * {
    color: ${props.isSelected ? Color.Gray : Color.Gray};
  }
  transition: background 0.1s ease-out;
  > :last-child {
    margin-right: ${!props.isSelected ? 0 : ''};
    margin-left: ${!props.isSelected ? '' : ''};
  }
`);

export const ItemsWrapper = styled.div<{isDropdownOpen: boolean}>(props => `
@keyframes sizeScale {
  0% {
      width:200px;
  }
  100% {
      width:300px;
  }
}
  width: 100%;
  height: auto;
  overflow-x: hidden;
  overflow-y: auto;
  top: 100%;
  left: 0px;
  position: absolute;
  z-index: 7;
  margin: 0 -1px;
  // min-width: calc(100% + -2px);
  // width: calc(100% + -2px);
  :active {transition: opacity .1s ease;}
  border-radius: 0 0 4px 4px;
  border-top-width: 0!important;
  border: 1px solid ${Color.Gray};
  display: ${props.isDropdownOpen? 'block':'none'};
  box-shadow: 0 2px 3px 0 rgba(34,36,38,.15);
  `);

export const Wrapper = styled.div<{isDropdownOpen: boolean}>(props => `
  &:focus {
    border: 1px solid ${Color.LightGray};
  }
  background: white;
  min-width: 200px;
  height: 100%;

  ${props.isDropdownOpen?`
  :after {
    content: "";
    width: 100%;
    height: 100%;
    cursor: default; /* カーソルはデフォルトに戻しておく */
    position: fixed;
    top: 0;
    left: 0;
    z-index: 5
  }`:""}
`);

//TODO: 名前びみょい

export type DropDownProps = {
    onClick: () => void;
    width?: number;
    height?: number;
    isDropdownOpen: boolean;
    fontSize?: keyof typeof FontSize;
    isBoxShadow?:boolean;
}

export const DropDownButton = styled.div<DropDownProps>(props => `
    vertical-align: middle;
    display: block;
    z-index: 6;
    position: relative;
    width: ${props.width?props.width+'px':''};
    height: ${props.height?props.height+'px':'100%'};
    font-size: ${props.fontSize?props.fontSize:FontSize.Medium};
    padding: ${Space.TINY};
    border: 1px solid ${Color.Gray};
    border-radius: ${props.isDropdownOpen? '4px 4px 0 0':'4px'};
    border-bottom-width: ${props.isDropdownOpen? '0!important': '1px'};
    animation: fadeIn 3s, fadeOut 3s 5s forwards;
    -webkit-transition: width .1s ease,-webkit-box-shadow .1s ease;
    transition: width .1s ease,-webkit-box-shadow .1s ease;
    transition: box-shadow .1s ease,width .1s ease;
    transition: box-shadow .1s ease,width .1s ease,-webkit-box-shadow .1s ease;
    ${props.isDropdownOpen || !props.isBoxShadow?'':`
    box-shadow: 0 2px 3px 0 rgba(34,36,38,.15);
    `}
`);

export const SelectedText = styled.div`
  display: inline-block;
  box-sizing: inherit;
  //font-family: Lato;
  font-size: ${FontSize.Small};
  padding: 0px ${Space.TINY};
`

export const SelectedLabel = styled.div`
    //font-family: Lato;
    font-size: ${FontSize.Small};
    font-weight: 700;
`
export const UnSelectedLabel = styled.div`
    //font-family: Lato;
    font-size: ${FontSize.Small};
`