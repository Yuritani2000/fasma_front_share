import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import PurchaserOrExhibitorInfo, { PurchaserOrExhibitorInfoProps, NotificationType } from './index'

export default {
  title: "Organisms/PurchaserOrExhibitorInfo",
  component: PurchaserOrExhibitorInfo,
  decorators: [
    (Story) => (<Story />),
  ],
  argTypes: {
    isVisible: {
      control: {
        type: 'boolean'
      }
    },
    width: {
    },
    notificationType: {
      control: {
        type: 'select',
        options: Object.keys(NotificationType).filter(k => typeof NotificationType[k as keyof typeof NotificationType] === "number"),
      }
    },
    month: {
      control: {
        type: 'number'
      }
    },
    date: {
      control: {
        type: 'number'
      }
    },
  },
} as Meta;

const Template: Story<PurchaserOrExhibitorInfoProps> = (args) => <PurchaserOrExhibitorInfo {...args} />;

export const _PurchaserOrExhibitorInfo = Template.bind({});
_PurchaserOrExhibitorInfo.args = {
  isVisible: true,
  width: '840px',
  notificationType: 'Bought',
  month: 4,
  date: 1,
  gmailAddress: 'hogehogehogehoge@gmail.com',
  funMailAddress: 'hogehoge@fun.ac.jp',
  otherMailAddress: 'hoge@fuga.co.jp',
  lineQrCodeUrl: 'https://lh3.googleusercontent.com/pw/ACtC-3cUs8S0_2sejxXaRDAwgwz5CWlDxDHqjRp4F9z2de97GcfT9rUfhFETcW8HdtQ868dTNRUiNAcST1bTtJFPZPSYf5HEmPYlz6hD9RtNZ9t1h5vaSuuy9_oO4WYX3YGKjk9WxmakRwHzS1zN_jI51ZNK=w1688-h949-no?authuser=0',
};