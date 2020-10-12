import React from "react";
import { Story, Meta } from '@storybook/react/types-6-0';
import { FontSize } from "../../../styles/Font";
import Text, { TextProps, TextTypes } from "./index"
import Color from "../../../styles/Color";

export default {
  title: 'Atoms/Text',
  component: Text,
  decorators:  [(Story) => <div style={{ fontSize: '62.5%' }}><Story/></div>],
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: FontSize,
      },
    },
    textType: {
      control: {
        type: 'select',
        options: TextTypes,
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

const Template: Story<TextProps> = (args) => <Text {...args} />;

export const Texts = Template.bind({});
Texts.args = {
  size: FontSize.Small,
  textType: TextTypes.primary,
  children: 'test',
};
