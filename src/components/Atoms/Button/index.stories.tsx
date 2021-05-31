import React from "react";
import { Story, Meta } from '@storybook/react/types-6-0';
import Button, { ButtonPropsMap, ButtonShapes, ButtonTypes } from "./index";
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
    buttonShape: {
      control: {
        type: 'select',
        options: ButtonShapes,
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
    diameter: {
      control: {
        type: 'string',
      },
    },
  },
} as Meta;

const Template: Story<ButtonPropsMap> = (args) => <Button {...args} />;

export const Buttons = Template.bind({});
Buttons.args = {
  size: FontSize.Small,
  buttonShape: ButtonShapes.rect,
  buttonType: ButtonTypes.primary,
  label: 'test',
  diameter: '0.97cm',
};
