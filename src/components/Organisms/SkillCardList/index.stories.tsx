import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import SkillCardList, { SkillCardListProps } from './index'

export default {
  title: "Organisms/SkillCardList",
  component: SkillCardList,
  decorators: [
    (Story) => (<Story/>),
  ],
  argTypes: {
    skillData:[
      {
        skillName: {},
        skillCategory: {},
        tags: [],
        skillDescription: {},
        imgUrl: {},
        price: {}
      }
    ]
  },
} as Meta;

const Template: Story<SkillCardListProps> = (args) => <SkillCardList {...args} />;

export const _SkillCardList = Template.bind({});
_SkillCardList.args = {
  skillData: [
    {
      skillName: "Proccesing",
      skillCategory: "Programing",
      tags: ["programing", "proccessing", "1st grade"],
      skillDescription: "一学年のProccessingはSで通過しました。Javaの知識もあるので弾幕ゲームを作る際に必要なクラスについても教えることができます。",
      price: 10,
      imgUrl:"https://pbs.twimg.com/media/EFEV9KxVAAANguo?format=jpg&name=small"
    },
    {
      skillName: "Proccesing",
      skillCategory: "Programing",
      tags: ["programing", "proccessing", "1st grade"],
      skillDescription: "一学年のProccessingはSで通過しました。Javaの知識もあるので弾幕ゲームを作る際に必要なクラスについても教えることができます。",
      price: 10,
      imgUrl:"https://pbs.twimg.com/media/Edo3SPCUcAEY7Z6?format=jpg&name=small"
    }
  ]
};
