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
    skillName: '上手に左バック駐車をする方法aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
    skillExplanation: '免許を取ったばかりで、運転に全然なれていないという方向けです。教習所で縦列駐車と方向転換はしたと言っても、いざ駐車場で実践してみるとなると全然間隔がつかめない！バックに時間がかかりすぎて後ろの車を待たせるのが怖い！という経験はありませんか？実は左バックはコツをつかめばとっても簡単なんです！スキルをご購入いただいた方には、私の車を貸し出します（保険には事前に加入してもらいます。）。',
    imageUrl: 'https://www.fun.ac.jp/wp-content/themes/fun_2012/img/title-ja.svg',
};