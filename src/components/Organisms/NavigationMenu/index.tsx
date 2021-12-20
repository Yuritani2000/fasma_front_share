import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clickNavigationMenu } from '../../../actions/NavigationMenu/ActionCreator';
import RootState from '../../../states';
import { NavigationMenuContent } from '../../../states/NavigationMenu';
import NavigationMenuElement from '../../Molecules/NavigationMenuElement';

export type NavigationMenuData = {
  label: string,
  enLabel: NavigationMenuContent,
  notificationCount: number
}

export type NavigationMenuProps = {
  navigationMenuData: NavigationMenuData[],
}

const NavigationMenu: React.FC<NavigationMenuProps> = (props) => {
  const { navigationMenuData } = props;
  const currentTab = useSelector<RootState, RootState['navigationMenu']>(state => state.navigationMenu);

  const dispatch = useDispatch();

  const onClickElement = (_: React.MouseEvent<HTMLDivElement, MouseEvent>, enLabel: NavigationMenuContent) => {
    dispatch(clickNavigationMenu({ enLabel }))
  }

  return (
    <div>
      {navigationMenuData.map((menuData, index) => {
        return (
          <div key={index + menuData.label} onClick={(e) => { onClickElement(e, menuData.enLabel) }}>
            <NavigationMenuElement label={menuData.label} isSelected={menuData.enLabel === currentTab} notificationCount={menuData.notificationCount} />
          </div>
        )
      })}
    </div>
  );
}

export default NavigationMenu;