import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import NotFound from './index';

export default {
  title: 'Organisms/NotFound',
  component: NotFound,
  decorators: [(Story) => <Story />],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {},
} as Meta;

const Template: Story = (args) => <NotFound {...args} />;

export const PurchasedSkills = Template.bind({});
PurchasedSkills.args = {};
