import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import LogIn from './index'

export default {
  title: "Organisms/LoginModal",
  component: LogIn,
  decorators: [
    (Story) => (<Story/>),
  ],
  argTypes: {
  },
} as Meta;

const Template: Story = (args) => <LogIn />;

export const _Header = Template.bind({});
_Header.args = {
};
