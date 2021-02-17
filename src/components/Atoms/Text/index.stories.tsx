import React from "react";
import { Story, Meta } from '@storybook/react/types-6-0';
import { FontSize } from "../../../styles/Font";
import Text, { TextProps } from "./index";

export default {
  title: 'Atoms/Text',
  component: Text,
  decorators: [(Story) => <div style={{ fontSize: '62.5%' }}><Story /></div>],
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: Object.keys(FontSize).filter(k => typeof FontSize[k as keyof typeof FontSize] === "string"),
      },
    },
    textType: {
      control: {
        type: 'select',
        options: ['Default', 'Primary', 'Warning', 'Danger', 'Tag'],
      },
    },
    width: {
      control: {
        type: 'number',
      },
    },
    omit: {
      control: {
        type: 'boolean',
      },
    },
    omittingLineNumber: {
      control: {
        type: 'number',
      },
    },
    isBold: {
      control: {
        type: 'boolean',
      },
    },
  },
} as Meta;

const Template: Story<TextProps> = (args) => <Text {...args} />;

export const Texts = Template.bind({});
Texts.args = {
  size: 'Small',
  textType: 'Default',
  children: 'test',
  omit: false,
  omittingLineNumber: 1,
  isBold: false,
};
