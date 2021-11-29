import React, { useState } from 'react';
import { Story, Meta } from "@storybook/react/types-6-0";
import NewSkillCard, { NewSkillCardProps } from './index'

export default {
    title: "Molecules/NewSkillCard",
    component: NewSkillCard,
    decorators: [
        (Story) => (<Story />),
    ],
    argTypes: {
        skillName: {
            control: {
                type: 'string',
            }
        },
        thumbnail: {
            control: {
                type: 'string',
            }
        },
        price: {
            control: {
                type: 'number',
            }
        }
    },
} as Meta;

const Template: Story<NewSkillCardProps> = (args) => {
    return <NewSkillCard {...args}
    />
}

export const _NewSkillCard = Template.bind({});
_NewSkillCard.args = {
    skillName: "プロ基礎教えます",
    thumbnail: "https://lh3.googleusercontent.com/pw/AM-JKLWar9aY9xoVfH1weoSybN1r0yILcorVzSIZnr4X47rcvPZ3GTBTzaQjOoMYajhrAv7C2ZEsieDE8dBuEeNo-ZQpjEhid-VjMGDP4FkqYHHBG9nuNujcgB3AqcHvzPVh4-8b6zId9hQGDrhhg7ANfHS_=w1131-h636-no?authuser=0",
    price: 1234
};