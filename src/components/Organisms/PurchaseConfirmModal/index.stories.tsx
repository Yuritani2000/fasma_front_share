import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import PurchaseConfirmModal, { PurchaseConfirmModalProps } from './index'

export default {
  title: "Organisms/PurchaseConfirmModal",
  component: PurchaseConfirmModal,
  decorators: [
    (Story) => (<Story />),
  ],
  argTypes: {
    isGmailAddress: {
      control: {
        type: 'boolean',
      }
    },
    isFunMailAddress: {
      control: {
        type: 'boolean',
      }
    },
    isOtherMailAddress: {
      control: {
        type: 'boolean',
      }
    },
    isLineQrCode: {
      control: {
        type: 'boolean',
      }
    },
    skillPrice: {
      control: {
        type: 'number',
      }
    },
  },
} as Meta;

const Template: Story<PurchaseConfirmModalProps> = (args) => <PurchaseConfirmModal {...args} />;

export const _PurchaseConfirmModal = Template.bind({});
_PurchaseConfirmModal.args = {
  isGmailAddress: true,
  isFunMailAddress: true,
  isOtherMailAddress: true,
  isLineQrCode: true,
  skillPrice: 54000,
};