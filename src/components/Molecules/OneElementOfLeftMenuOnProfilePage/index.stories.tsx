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
        label: {
            control: {
                type: 'string',
            }
        },
        numberOfNotification: {
            control: {
                type: 'number',
            }
        },
        isDisplaying: {
            control: {
                type: 'boolean',
            }
        },
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
    numberOfNotification: 5,
    isDisplaying: false,
};