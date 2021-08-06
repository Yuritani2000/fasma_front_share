import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import SkillPost, { SkillPostProps } from './index'

export default {
  title: "Organisms/SkillPost",
  component: SkillPost,
  decorators: [
    (Story) => (<Story />),
  ],
  argTypes: {
  },
} as Meta;

const Template: Story<SkillPostProps> = (args) => <SkillPost {...args} />;

export const _SkillPost = Template.bind({});
_SkillPost.args = {
};
