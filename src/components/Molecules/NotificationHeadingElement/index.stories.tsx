import React, { useState } from 'react';
import { Story, Meta } from "@storybook/react/types-6-0";
import NotificationHeadingElement, { NotificationHeadingElementProps } from '.';
import { convertCompilerOptionsFromJson } from 'typescript';

export default {
  title: "Molecules/NotificationHeadingElement",
  component: NotificationHeadingElement,
  decorators: [
    (Story) => (<div style={{ width: '80%' }}><Story /></div>),
  ],
  argTypes: {
    skillName: {
    },
    purchaser: {
    },
    width: {
    },
    handleClick: {
    },
  },
} as Meta;

const Template: Story<NotificationHeadingElementProps> = (args) => {
  return <NotificationHeadingElement {...args} />
}

export const _NotificationHeadingElement = Template.bind({});
_NotificationHeadingElement.args = {
  skillName: "アルゴの課題のお手伝い",
  purchaser: "タコ",
  width: 750,
  handleClick: (() => {
    console.log('clicked notification heading element')
  })
};