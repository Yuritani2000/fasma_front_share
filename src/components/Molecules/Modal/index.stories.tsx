import React from "react";
import { Story, Meta } from '@storybook/react/types-6-0';
import Modal, { Props } from "./index";

export default {
  title: 'Molecules/Modal',
  component: Modal,
  decorators: [(Story) => <div style={{ fontSize: '62.5%' }}><Story /></div>],
  argTypes: {
    url: {},
    size: {},
    sizeTypes: {}
  },
} as Meta;

const Template: Story<Props> = (args) => <Modal {...args} />;

export const Images = Template.bind({});
Images.args = {
};