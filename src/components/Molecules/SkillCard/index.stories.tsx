import React, { useState } from 'react';
import { Story, Meta } from "@storybook/react/types-6-0";
import SkillCard, { Props } from './index'

export default {
    title: "Molecules/SkillCard",
    component: SkillCard,
    decorators: [
        (Story) => (<Story />),
    ],
    argTypes: {
        skillName: {},
        skillCategory: {},
        tags: [],
        skillDescription: {},
        imgUrl: {},
        price: {}
    },
} as Meta;

const Template: Story<Props> = (args) => {
    return <SkillCard {...args}/>
}

export const _SkillCard = Template.bind({});
_SkillCard.args = {
    skillName:"",
    skillCategory: "",
    tags: [],
    skillDescription: "",
    price: undefined,
    imgUrl:"https://pbs.twimg.com/media/EFEV9KxVAAANguo?format=jpg&name=small"
};