import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import NavigationMenu, { NavigationMenuProps } from './index';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from '../../../reducers';

const store = createStore(rootReducer)

export default {
  title: 'Organisms/NavigationMenu',
  component: NavigationMenu,
  decorators: [(Story) => <Provider store={store}><Story /></Provider>]
} as Meta;

const Template: Story<NavigationMenuProps> = (args) => {
  return <NavigationMenu {...args} />
};

export const _NavigationMenu = Template.bind({});
_NavigationMenu.args = {
  navigationMenuData: [
    {
      label: 'プロフィール',
      notificationCount: 0
    },
    {
      label: 'おしらせ',
      notificationCount: 5
    },
    {
      label: '出品したスキル',
      notificationCount: 0
    },
    {
      label: '購入したスキル',
      notificationCount: 0
    },
  ]
};