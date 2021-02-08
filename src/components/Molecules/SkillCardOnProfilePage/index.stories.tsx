import React, { useState } from 'react';
import { Story, Meta } from "@storybook/react/types-6-0";
import SkillCardOnProfilePage, { SkillCardOnProfilePageProps } from './index'

export default {
    title: "Molecules/SkillCardOnProfilePage",
    component: SkillCardOnProfilePage,
    decorators: [
        (Story) => (<Story />),
    ],
    argTypes: {
        skillName: {
            control: {
                type: 'string',
            }
        },
        skillExplanation: {
            control: {
                type: 'string',
            }
        },
        imageUrl: {
            control: {
                type: 'string',
            }
        },
    },
} as Meta;

const Template: Story<SkillCardOnProfilePageProps> = (args) => {
    const [value, setValue] = useState('');
    return <SkillCardOnProfilePage {...args}
    />
}

export const _SearchBox = Template.bind({});
_SearchBox.args = {
    skillName: '上手に左バック駐車をする方法',
    skillExplanation: '免許を取ったはいいけど駐車の練習をしていない！駐車場で後ろの車を待たせるのが怖い！という方に、上手に左バック駐車をする方法を伝授します。',
    imageUrl: 'https://www.fun.ac.jp/wp-content/themes/fun_2012/img/title-ja.svg',
};