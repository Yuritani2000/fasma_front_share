import React, { useState } from 'react';
import { Story, Meta } from "@storybook/react/types-6-0";
import NavigationMenuElement, { NavigationMenuElementProps } from './index'

export default {
    title: "Molecules/NavigationMenuElement",
    component: NavigationMenuElement,
    decorators: [
        (Story) => (<Story />),
    ],
    argTypes: {
        isSelected: {
            control: {
                type: 'boolean',
            }
        },
        width: {
            control: {
                type: 'number',
            }
        },
        height: {
            control: {
                type: 'number',
            }
        }
    },
} as Meta;

const Template: Story<NavigationMenuElementProps> = (args) => {
    const [value, setValue] = useState('');
    return <NavigationMenuElement {...args}
    />
}

export const _NavigationMenuElement = Template.bind({});
_NavigationMenuElement.args = {
    label: 'プロフィール',
    notificationCount: 5,
    isSelected: false,
    width: 291,
    height: 43
};