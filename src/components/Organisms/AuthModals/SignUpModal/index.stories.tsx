import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import SignUp from './index'

export default {
  title: "Organisms/SignUpModal",
  component: SignUp,
  decorators: [
    (Story) => (<Story/>),
  ],
  argTypes: {
  },
} as Meta;

const Template: Story = (args) => <SignUp />;

export const _Header = Template.bind({});
_Header.args = {
};
