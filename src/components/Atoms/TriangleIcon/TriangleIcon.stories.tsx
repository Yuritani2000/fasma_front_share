import React from "react";
import { Story, Meta } from '@storybook/react/types-6-0';
import TriangleIcon, { TriangleIconProps } from "./TriangleIcon";
import Color from '../../../styles/Color';

export default {
  title: 'Atoms/TriangleIcon',
  component: TriangleIcon,
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

const Template: Story<TriangleIconProps> = (args) => <TriangleIcon {...args} />;

export const Texts = Template.bind({});
Texts.args = {
  color: 'Black',
  width: 12,
  height: 10,
};
