import React, { useState } from 'react';
import { Story, Meta } from "@storybook/react/types-6-0";
import DropDownList, { Props } from './index'

export default {
    title: "Molecules/DropDownList",
    component: DropDownList,
    decorators: [
        (Story) => (<div style={{ width: '80%' }}><Story /></div>),
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
    const [value, setValue] = useState(
        {
            label: "選択してください",
        });
    return <DropDownList {...args}
        selectItem={value}
        onChangedSelectItem={(_) =>
            setValue(_)}
    />
}

export const _SearchBox = Template.bind({});
_SearchBox.args = {
    items: [
        {
            label: "数学",
        },
        {
            label: "プログラミング",
        },
        {
            label: "デザイン",
        },
        {
            label: "料理",
        },
        {
            label: "生活スキル",
        },
        {
            label: "趣味",
        },
        {
            label: "大学関係",
        },
        {
            label: "その他",
        }
    ]
};