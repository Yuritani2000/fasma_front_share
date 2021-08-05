import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import SkillPurchaseTemplete, { SkillPurchaseTempleteProps } from ".";
import { NotificationType } from "../../Organisms/PurchaserOrExhibitorInfo";
export default {
  title: "Templetes/SkillPurchaseTemplete",
  component: SkillPurchaseTemplete,
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
    gmailAddress: {
    },
    funMailAddress: {
    },
    otherMailAddress: {
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
    },
    notificationType: {
      type: NotificationType
    }
  },
} as Meta;
const Template: Story<SkillPurchaseTempleteProps> = (args) => <SkillPurchaseTemplete {...args} />;
export const _SkillPurchaseTemplete = Template.bind({});
_SkillPurchaseTemplete.args = {
  skillName: "React",
  skillDescription: "Reactとは、Facebook社が開発したWebサイト上のUIパーツを構築するためのJavaScriptライブラリです。React.jsやReact.JSと呼ばれることもあります。よくAngularJSやjQueryと比較されますが、React自体はフレームワークでなく、あくまでもUIを構築するだけのライブラリです。",
  skillThumbnail: "https://bit.ly/3igJ0Vu",
  sellerName: "山田太朗",
  gmailAddress: "b1018001@gmail.com",
  funMailAddress: "b1018001@fun.ac.jp",
  otherMailAddress: "b1018001@yahoo.com",
  lineQrCodeUrl: "https://bit.ly/3Cg1IF1",
  skillTags: ["Web", "UI", "フロントエンド"],
  skillPrice: 1000000,
  isPurchased: false,
  purchasedMonth: 4,
  purchasedDate: 1,
  notificationType: 'Bought'
};