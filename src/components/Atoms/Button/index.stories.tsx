import React from "react";
import { Story, Meta } from '@storybook/react/types-6-0';
import Button, { ButtonPropsMap, ButtonTypes } from "./index";
import { FontSize } from "../../../styles/Font";
import Color from "../../../styles/Color";

export default {
  title: 'Atoms/Buttons',
  component: Button,
  decorators:  [(Story) => <Story/>],
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: FontSize,
      },
    },
    buttonType: {
      control: {
        type: 'select',
        options: ButtonTypes,
      },
    },
    color: {
      control: {
        type: 'select',
        options: Color,
      },
    },
    width: {
      control: {
        type: 'number',
      },
    },
  },
} as Meta;

const Template: Story<ButtonPropsMap> = (args) => <Button {...args} />;

export const Buttons = Template.bind({});
Buttons.args = {
  size: FontSize.Small,
  buttonType: ButtonTypes.primary,
  label: 'test',
};
