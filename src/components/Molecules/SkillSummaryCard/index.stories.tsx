import React, { useState } from 'react';
import { Story, Meta } from "@storybook/react/types-6-0";
import SkillSummaryCard, { SkillSummaryCardProps } from '.';


export default {
    title: "Molecules/SkillSummaryCard",
    component: SkillSummaryCard,
    decorators: [
        (Story) => (<Story />),
    ],
    argTypes: {
        skillName: {},
        skillExplanation: {},
        imageUrl: {},
    },
} as Meta;

const Template: Story<SkillSummaryCardProps> = (args) => {
    return <SkillSummaryCard {...args} />
}

export const _SkillSummaryCard = Template.bind({});
_SkillSummaryCard.args = {
    skillName: '上手に左バック駐車をする方法',
    skillDescription: '免許を取ったばかりで、運転に全然なれていないという方向けです。教習所で縦列駐車と方向転換はしたと言っても、いざ駐車場で実践してみるとなると全然間隔がつかめない！バックに時間がかかりすぎて後ろの車を待たせるのが怖い！という経験はありませんか？実は左バックはコツをつかめばとっても簡単なんです！スキルをご購入いただいた方には、私の車を貸し出します（保険には事前に加入してもらいます。）。',
    imageUrl: 'https://lh3.googleusercontent.com/pw/ACtC-3cUs8S0_2sejxXaRDAwgwz5CWlDxDHqjRp4F9z2de97GcfT9rUfhFETcW8HdtQ868dTNRUiNAcST1bTtJFPZPSYf5HEmPYlz6hD9RtNZ9t1h5vaSuuy9_oO4WYX3YGKjk9WxmakRwHzS1zN_jI51ZNK=w1736-h976-no?authuser=0',
};