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
        value: {
            control: {
                type: 'string',
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
};