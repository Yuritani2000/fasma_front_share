import React, { useState } from 'react';
import NavigationMenuElement from '../../Molecules/NavigationMenuElement';

export type NavigationMenuData = {
  label: string,
  notificationCount: number
}

export type NavigationMenuProps = {
  navigationMenuData: NavigationMenuData[],
  setMenuNumber: (value: number) => void;
}

const NavigationMenu: React.FC<NavigationMenuProps> = (props) => {
  const { navigationMenuData, setMenuNumber } = props;
  const [whichIsSelected, setWhichIsSelected] = useState<boolean[]>(new Array<boolean>(navigationMenuData.length).fill(false).map((item, index) => item = (index == 0) ? true : false));

  const onClickElement = (_: React.MouseEvent<HTMLDivElement, MouseEvent>, indexArg: number) => {
    const alteredArray = whichIsSelected.map((item, index) => item = (index === indexArg) ? true : false);
    setWhichIsSelected(alteredArray);
    setMenuNumber(indexArg);
  }

  return (
    <div>
      {navigationMenuData.map((menuData, index) => {
        return (
          <div key={index + menuData.label} onClick={(e) => { onClickElement(e, index) }}>
            <NavigationMenuElement label={menuData.label} isSelected={whichIsSelected[index]} notificationCount={menuData.notificationCount} width={291} height={43} />
          </div>
        )
      })}
    </div>
  );
}

export default NavigationMenu;