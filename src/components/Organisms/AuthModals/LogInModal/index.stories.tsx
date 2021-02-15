import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import LoginModal from './index'

export default {
  title: "Organisms/LoginModal",
  component: LoginModal,
  decorators: [
    (Story) => (<Story/>),
  ],
  argTypes: {
  },
} as Meta;

const Template: Story = (args) => <LoginModal />;

export const _Header = Template.bind({});
_Header.args = {
};
