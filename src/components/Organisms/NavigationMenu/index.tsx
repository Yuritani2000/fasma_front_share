import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import NavigationMenuAction from '../../../actions/NavigationMenu/Action';
import { clickExhibitedSkillsTab, clickNoticeTab, clickProfileTab, clickPurchasedSkillsTab } from '../../../actions/NavigationMenu/ActionCreator';
import NavigationMenuElement from '../../Molecules/NavigationMenuElement';

export type NavigationMenuData = {
  label: string,
  notificationCount: number
}

export type NavigationMenuProps = {
  navigationMenuData: NavigationMenuData[],
}

const NavigationMenu: React.FC<NavigationMenuProps> = (props) => {
  const { navigationMenuData } = props;
  const [whichIsSelected, setWhichIsSelected] = useState<boolean[]>(new Array<boolean>(navigationMenuData.length).fill(false).map((item, index) => item = (index === 0) ? true : false));
  const dispatch = useDispatch();
  const navigationMenuActions: NavigationMenuAction[] = [clickProfileTab(), clickNoticeTab(), clickExhibitedSkillsTab(), clickPurchasedSkillsTab()]

  const onClickElement = (_: React.MouseEvent<HTMLDivElement, MouseEvent>, indexArg: number) => {
    const alteredArray = whichIsSelected.map((item, index) => item = (index === indexArg) ? true : false);
    setWhichIsSelected(alteredArray);
    dispatch(navigationMenuActions[indexArg])
  }

  return (
    <div>
      {navigationMenuData.map((menuData, index) => {
        return (
          <div key={index + menuData.label} onClick={(e) => { onClickElement(e, index) }}>
            <NavigationMenuElement label={menuData.label} isSelected={whichIsSelected[index]} notificationCount={menuData.notificationCount}/>
          </div>
        )
      })}
    </div>
  );
}

export default NavigationMenu;