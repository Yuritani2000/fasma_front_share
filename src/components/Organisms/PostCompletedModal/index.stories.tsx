import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import PostCompletedModal from ".";
import { createStore } from "redux";
import rootReducer from "../../../reducers";
import { Provider } from "react-redux";

const store = createStore(rootReducer)

export default {
  title: "Organisms/PostCompletedModal",
  component: PostCompletedModal,
  decorators: [
    (Story) => (<Provider store={store}><Story /></Provider>),
  ],
  argTypes: {
  },
} as Meta;

const Template: Story = (_) => <PostCompletedModal />;

export const _PostCompletedModal = Template.bind({});
_PostCompletedModal.args = {
};
