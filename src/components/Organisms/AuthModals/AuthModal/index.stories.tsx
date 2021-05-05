import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import AuthModal from './index'

export default {
  title: "Organisms/AuthModal",
  component: AuthModal,
  decorators: [
    (Story) => (<Story/>),
  ],
  argTypes: {
  },
} as Meta;

const Template: Story = (args) => <AuthModal />;

export const _AuthModal = Template.bind({});
_AuthModal.args = {
};
