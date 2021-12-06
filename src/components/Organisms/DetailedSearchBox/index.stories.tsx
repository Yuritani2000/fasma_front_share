import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import DetailedSearchBox, { Props } from './index'

import Category from '../../../utils/Other/Json/Category';

export default {
  title: "Organisms/DetailedSearchBox",
  component: DetailedSearchBox,
  decorators: [
    (Story) => (<Story/>),
  ],
  argTypes: {
  },
} as Meta;

const Template: Story = (args) => <DetailedSearchBox Category={Category}/>;

export const _DetailedSearchBox = Template.bind({});
_DetailedSearchBox.args = {
};
