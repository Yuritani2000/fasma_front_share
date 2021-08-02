import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import SkillPurchaseArea, { SkillPurchaseAreaProps } from './index'

export default {
  title: "Organisms/SkillPurchaseArea",
  component: SkillPurchaseArea,
  decorators: [
    (Story) => (<Story />),
  ],
  argTypes: {
    skillName: {
    },
    skillDescription: {
    },
    skillThumbnail: {
    },
    sellerName: {
    },
    gmailAdress: {
    },
    funMailAdress: {
    },
    otherMailAdress: {
    },
    lineQrCodeUrl: {
    },
    skillTags: [],
    skillPrice: {
      type: 'number'
    },
    isPurchased: {
      type: 'boolean'
    },
    purchasedMonth: {
      type: 'number'
    },
    purchasedDate: {
      type: 'number'
    }
  },
} as Meta;

const Template: Story<SkillPurchaseAreaProps> = (args) => <SkillPurchaseArea {...args} />;

export const _SkillPurchaseArea = Template.bind({});
_SkillPurchaseArea.args = {
  skillName: "React",
  skillDescription: "Reactとは、Facebook社が開発したWebサイト上のUIパーツを構築するためのJavaScriptライブラリです。React.jsやReact.JSと呼ばれることもあります。よくAngularJSやjQueryと比較されますが、React自体はフレームワークでなく、あくまでもUIを構築するだけのライブラリです。",
  skillThumbnail: "https://bit.ly/3igJ0Vu",
  sellerName: "山田太朗",
  gmailAdress: "b1018001@gmail.com",
  funMailAdress: "b1018001@fun.ac.jp",
  otherMailAdress: "b1018001@yahoo.com",
  lineQrCodeUrl: "https://bit.ly/3Cg1IF1",
  skillTags: ["Web", "UI", "フロントエンド"],
  skillPrice: 1000000,
  isPurchased: false,
  purchasedMonth: 4,
  purchasedDate: 1
};