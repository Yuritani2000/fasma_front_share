import React from "react";
import { Story, Meta } from '@storybook/react/types-6-0';
import Button, { ButtonPropsMap, ButtonType } from "./index";


export default {
  title: 'Atoms/Buttons',
  component: Button,
  decorators:  [(Story) => <div style={{ fontSize: '62.5%' }}><Story/></div>],
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: ['Tiny','Small','Medium','Large','H4','H3','H2','H1'],
      },
    },
    type: {
      control: {
        type: 'select',
        options: ButtonType,
      },
    },
  },
} as Meta;

const Template: Story<ButtonPropsMap> = (args) => <Button {...args} />;

export const Buttons = Template.bind({});
Buttons.args = {
  size: 'Small',
  type: ButtonType.primary,
  label: 'test',
};
