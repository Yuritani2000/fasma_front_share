import React from "react";
import { Story, Meta } from '@storybook/react/types-6-0';
import Image, { ImageSize, ImageProps } from "./Image";
import Color from "../../styles/Color";

export default {
  title: 'Atoms/Images',
  component: Image,
  decorators: [(Story) => <div style={{ fontSize: '62.5%' }}><Story /></div>],
  argTypes: {
    url: {},
    size: {},
    sizeTypes: {
      control: {
        type: 'select',
        options: ImageSize,
      },
    }
  },
} as Meta;

const Template: Story<ImageProps> = (args) => <Image {...args} />;

export const Images = Template.bind({});
Images.args = {
  size: "",
  sizeTypes: ImageSize.SMALL,
  url: "https://pbs.twimg.com/media/EFEV9KxVAAANguo?format=jpg&name=small",
};
