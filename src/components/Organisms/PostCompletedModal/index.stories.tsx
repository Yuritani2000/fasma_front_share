import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import PostCompletedModal from ".";

export default {
  title: "Organisms/PostCompletedModal",
  component: PostCompletedModal,
  decorators: [
    (Story) => (<Story />),
  ],
  argTypes: {
  },
} as Meta;

const Template: Story = (_) => <PostCompletedModal />;

export const _PostCompletedModal = Template.bind({});
_PostCompletedModal.args = {
};
