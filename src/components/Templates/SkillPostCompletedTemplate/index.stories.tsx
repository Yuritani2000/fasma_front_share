import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import SkillPostCompletedTemplate from ".";
import ReduxProvider from "../../../utils/Fixture/ReduxProvider";

export default {
  title: "Templates/SkillPostCompletedTemplate",
  component: SkillPostCompletedTemplate,
  decorators: [
    (Story) => (<Story />),
  ],
} as Meta;

const Template: Story = () => <ReduxProvider component={<SkillPostCompletedTemplate />} />;
export const _SkillPostCompletedTemplate = Template.bind({});