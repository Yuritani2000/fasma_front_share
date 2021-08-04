import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import ListingCompletedModal from ".";

export default {
  title: "Organisms/ListingCompletedModal",
  component: ListingCompletedModal,
  decorators: [
    (Story) => (<Story />),
  ],
  argTypes: {
  },
} as Meta;

const Template: Story = (_) => <ListingCompletedModal />;

export const _ListingCompletedModal = Template.bind({});
_ListingCompletedModal.args = {
};
