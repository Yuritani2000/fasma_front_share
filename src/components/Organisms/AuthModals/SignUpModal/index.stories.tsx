import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import SignUpModal from './index'

export default {
  title: "Organisms/SignUpModal",
  component: SignUpModal,
  decorators: [
    (Story) => (<Story/>),
  ],
  argTypes: {
  },
} as Meta;

const Template: Story = (args) => <SignUpModal />;

export const _Header = Template.bind({});
_Header.args = {
};
