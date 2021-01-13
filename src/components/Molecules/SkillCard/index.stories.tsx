import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import SkillCard, { SkillCardProps } from './index'

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
        price: {},
    },
} as Meta;

const Template: Story<SkillCardProps> = (args) => <SkillCard {...args} />;

export const _SkillCard = Template.bind({});
_SkillCard.args = {
    skillName: "Proccesing",
    skillCategory: "Programing",
    tags: ["programing", "proccessing", "1st grade"],
    skillDescription: "一学年のProccessingはSで通過しました。Javaの知識もあるので弾幕ゲームを作る際に必要なクラスについても教えることができます。",
    price: 10,
    imgUrl: "https://pbs.twimg.com/media/EFEV9KxVAAANguo?format=jpg&name=small"
};
