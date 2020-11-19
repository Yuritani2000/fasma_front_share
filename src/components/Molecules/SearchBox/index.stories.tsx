import React, { useState } from 'react';
import { Story, Meta } from "@storybook/react/types-6-0";
import SearchBox, { Props } from './index'

export default {
    title: "Molecules/SearchBox",
    component: SearchBox,
    decorators: [
        (Story) => (
            <div style={{ fontSize: "62.5%" }}>
                <Story />
            </div>
        ),
    ],
    argTypes: {
        value: {
            control: {
                type: 'string',
            }
        },
    },
} as Meta;

const Template: Story<Props> = (args) => {
    const [value, setValue] = useState('');
    return <SearchBox {...args}
        value={value}
        handleSearchValue={(e: string) => setValue(e)}
    />
}

export const _SearchBox = Template.bind({});
_SearchBox.args = {
};