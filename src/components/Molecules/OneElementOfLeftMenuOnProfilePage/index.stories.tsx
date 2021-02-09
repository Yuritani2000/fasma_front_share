import React, { useState } from 'react';
import { Story, Meta } from "@storybook/react/types-6-0";
import OneElementOfLeftMenuOnProfilePage, { OneElementOfLeftMenuOnProfilePageProps } from './index'

export default {
    title: "Molecules/OneElementOfLeftMenuOnProfilePage",
    component: OneElementOfLeftMenuOnProfilePage,
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

const Template: Story<OneElementOfLeftMenuOnProfilePageProps> = (args) => {
    const [value, setValue] = useState('');
    return <OneElementOfLeftMenuOnProfilePage {...args}
    />
}

export const _SearchBox = Template.bind({});
_SearchBox.args = {
    label: 'プロフィール',
    numberOfNotification: 5,
    isDisplaying: false,
};