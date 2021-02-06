import React from "react";
import { Story, Meta } from '@storybook/react/types-6-0';
import Triangle, { TriangleProps } from "./Triangle";
import Color from '../../../styles/Color';

export default {
  title: 'Atoms/Triangle',
  component: Triangle,
  decorators: [(Story) => <div style={{ fontSize: '62.5%' }}><Story /></div>],
  argTypes: {
    color: {
      control: {
        type: 'select',
        options: Object.keys(Color).filter(k => typeof Color[k as keyof typeof Color] === "string"),
      },
    },
    width: {
      control: {
        type: 'number',
      },
    },
    height: {
        control: {
          type: 'number',
        },
      },
  },
} as Meta;

const Template: Story<TriangleProps> = (args) => <Triangle {...args} />;

export const Texts = Template.bind({});
Texts.args = {
  color: 'Black',
  width: 12,
  height: 10,
};
