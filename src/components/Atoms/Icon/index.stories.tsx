import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import Icon, { IconProps } from "./index";
import { FontSize } from "../../../styles/Font";
import Color from "../../../styles/Color";

export default {
  title: "Atoms/Icon",
  component: Icon,
  decorators: [
    (Story) => (
      <div style={{ fontSize: "62.5%" }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    size: {
      control: {
        type: "select",
        options: FontSize,
      },
    },
    color: {
      control: {
        type: "select",
        options: Color,
      },
    },
  },
} as Meta;

const Template: Story<IconProps> = (args) => <Icon {...args} />;

export const Icons = Template.bind({});
Icons.args = {
  size: FontSize.Small,
};
