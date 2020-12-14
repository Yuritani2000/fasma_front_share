import React from "react";
import { Story, Meta } from '@storybook/react/types-6-0';
import Image, { ImageProps } from "./Image";

export default {
  title: 'Atoms/Images',
  component: Image,
  decorators: [(Story) => <div style={{ fontSize: '62.5%' }}><Story /></div>],
  argTypes: {
    url: {},
    size: {},
    sizeTypes: {}
  },
} as Meta;

const Template: Story<ImageProps> = (args) => <Image {...args} />;

export const Images = Template.bind({});
Images.args = {
  size: undefined,
  sizeTypes:'SMALL',
  url: "https://pbs.twimg.com/media/EFEV9KxVAAANguo?format=jpg&name=small",
};
