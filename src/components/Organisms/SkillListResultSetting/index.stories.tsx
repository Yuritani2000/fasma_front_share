import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import SkillListResultSetting from './index'

import Category from '../../../utils/Other/Json/Category';

export default {
  title: "Organisms/SkillListResultSetting",
  component: SkillListResultSetting,
  decorators: [
    (Story) => (<Story/>),
  ],
  argTypes: {
  },
} as Meta;

const Template: Story = (args) => <SkillListResultSetting/>;

export const _SkillListResultSetting = Template.bind({});
_SkillListResultSetting.args = {
};
