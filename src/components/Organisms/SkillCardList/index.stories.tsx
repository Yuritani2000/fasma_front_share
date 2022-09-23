import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import SkillCardList, { SkillCardListProps } from './index'

export default {
  title: "Organisms/SkillCardList",
  component: SkillCardList,
  decorators: [
    (Story) => (<Story />),
  ],
  argTypes: {
    skillData: [
      {
        name: {},
        categories_name: {},
        tags: [],
        description: {},
        thumbnail: {},
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
      id: 1,
      name: "Proccesing",
      thumbnail: "https://pbs.twimg.com/media/EFEV9KxVAAANguo?format=jpg&name=small",
      description: "一学年のProccessingはSで通過しました。Javaの知識もあるので弾幕ゲームを作る際に必要なクラスについても教えることができます。",
      price: 10,
      categories_name: "Programing",
      "status": 0,
      "seller_name": "カメックス",
      "seller_school_mail": "b1001013@fun.ac.jp",
      "buyer_name": "トランセル",
      "buyer_school_mail": "b1002014@fun.ac.jp",
      "transaction_update_at": 1660897573356
    },
    {
      id: 2,
      name: "Proccesing",
      thumbnail: "https://pbs.twimg.com/media/Edo3SPCUcAEY7Z6?format=jpg&name=small",
      description: "一学年のProccessingはSで通過しました。Javaの知識もあるので弾幕ゲームを作る際に必要なクラスについても教えることができます。",
      price: 10,
      categories_name: "Programing",
      "status": 0,
      "seller_name": "メガカメックス",
      "seller_school_mail": "b1001015@fun.ac.jp",
      "buyer_name": "バタフリー",
      "buyer_school_mail": "b1002016@fun.ac.jp",
      "transaction_update_at": 1660897629131
    }
  ]
};
