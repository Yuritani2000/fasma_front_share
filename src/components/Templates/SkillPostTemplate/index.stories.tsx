import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import SkillPostTemplate from ".";
import ReduxProvider from "../../../utils/Fixture/ReduxProvider";

export default {
  title: "Templates/SkillPostTemplate",
  component: SkillPostTemplate,
  decorators: [
    (Story) => (<Story />),
  ],
} as Meta;

const Template: Story = () => <ReduxProvider component={<SkillPostTemplate />} />;
export const _SkillPostTemplate = Template.bind({});