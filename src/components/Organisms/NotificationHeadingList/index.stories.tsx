import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import NotificationHeadingList, { NotificationHeadingListProps } from ".";
import { NotificationHeadingElementProps } from "../../Molecules/NotificationHeadingElement";

export default {
  title: "Organisms/NotificationHeadingList",
  component: NotificationHeadingList,
  decorators: [
    (Story) => (<Story />),
  ],
  argTypes: {
    skillNamesAndPurchasers: {
    },
  },
} as Meta;

const Template: Story<NotificationHeadingListProps> = (args) => <NotificationHeadingList {...args} />;

const mockSkillNamesAndPurchasers: NotificationHeadingElementProps[] = [
  {
    skillName: "React",
    purchaser: "山田太郎"
  },
  {
    skillName: "アルゴ課題のお手伝い",
    purchaser: "明坂聡美"
  },
  {
    skillName: "ポスターデザイン",
    purchaser: "白石稔"
  },
  {
    skillName: "解析学I",
    purchaser: "利根健太朗"
  }
]

export const _NotificationHeadingList = Template.bind({});
_NotificationHeadingList.args = {
  skillNamesAndPurchasers: mockSkillNamesAndPurchasers
};