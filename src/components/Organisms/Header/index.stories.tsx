import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import Header, { Props } from './index'

export default {
  title: "Organisms/Header",
  component: Header,
  decorators: [
    (Story) => (
      <div style={{ fontSize: "62.5%" }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
  },
} as Meta;

const Template: Story<Props>= (args) => <Header {...args}/>;

export const _Header = Template.bind({});
_Header.args = {
};