import React from "react";
import { Story, Meta } from '@storybook/react/types-6-0';
import CircleButton, { CircleButtonProps } from "./index";
import { FontSize } from "../../../styles/Font";
import Color from "../../../styles/Color";

export default {
  title: 'Atoms/CircleButton',
  component: CircleButton,
  decorators:  [(Story) => <Story/>],
  argTypes: {
    diameter: {
      control: {
        type: 'string',
      },
    },
    backgroundColor: {
      control: {
        type: 'select',
        options: Object.keys(Color).filter(k => typeof Color[k as keyof typeof Color] === "string"),
      },
    },
    fontColor: {
      control: {
        type: 'select',
        options: Object.keys(Color).filter(k => typeof Color[k as keyof typeof Color] === "string"),
      },
    },
    label: {
      control: {
        type: 'string',
      },
    },
    fontSize: {
      control: {
        type: 'select',
        options: Object.keys(FontSize).filter(k => typeof FontSize[k as keyof typeof FontSize] === "string"),
      },
    },
  },
} as Meta;

const Template: Story<CircleButtonProps> = (args) => <CircleButton {...args} handleClick={()=>{alert('button clicked')}}/>;

export const Buttons = Template.bind({});
Buttons.args = {
  diameter: '0.97cm',
  backgroundColor: 'Danger',
  fontColor: 'White',
  label: '×',
  fontSize: 'H1',
};
