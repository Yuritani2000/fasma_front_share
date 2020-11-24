import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import Icon, { IconProps } from "./index";
import { FontSize } from "../../../styles/Font";
import Color from "../../../styles/Color";
import IconType from "./icon";

export default {
  title: "Atoms/Icon",
  component: Icon,
  decorators: [
    (Story) => (<Story />
    ),
  ],
  argTypes: {
    size: {
      control: {
        type: "select",
        options: Object.keys(FontSize).filter(k => typeof FontSize[k as keyof typeof FontSize] === "string"),
      },
    },
    color: {
      control: {
        type: "select",
        options: Color,
      },
    },
    type: {
      control: {
        type: "select",
        options: IconType,
      },
    },
  },
} as Meta;

const Template: Story<IconProps> = (args) => <Icon {...args} />;

const testFunc = () => {
  console.log("test");
};

export const Icons = Template.bind({});
Icons.args = {
  size: 'Medium',
  color: Color.Gray,
  type: "MdAccountCircle",
  handleClick: testFunc,
};