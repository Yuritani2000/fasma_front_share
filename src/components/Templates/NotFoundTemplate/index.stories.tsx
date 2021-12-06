import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import NotFoundTemplate from './index';


export default {
  title: 'Templates/NotFoundTemplate',
  component: NotFoundTemplate,
  decorators: [(Story) => <Story />],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {},
} as Meta;

const Template: Story = (args) => <NotFoundTemplate {...args} />;


export const PurchasedSkills = Template.bind({});
PurchasedSkills.args = {
};
