import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import SkillPurchaseTemplate, { SkillPurchaseTemplateProps } from ".";
import { NotificationType } from "../../Organisms/PurchaserOrExhibitorInfo";
//utils
import ReduxProvider from '../../../utils/Fixture/ReduxProvider';

export default {
  title: "Templates/SkillPurchaseTemplate",
  component: SkillPurchaseTemplate,
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
const Template: Story<SkillPurchaseTemplateProps> = (args) => <ReduxProvider component={<SkillPurchaseTemplate {...args} />}/>;
export const _SkillPurchaseTemplate = Template.bind({});
_SkillPurchaseTemplate.args = {
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