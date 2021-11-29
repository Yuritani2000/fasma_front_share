import React from "react";
import { Story, Meta } from '@storybook/react/types-6-0';
import { FontSize } from "../../../styles/Font";
import Logo, { LogoProps } from "./index";

export default {
  title: 'Atoms/Logo',
  component: Logo,
  decorators: [(Story) => <div style={{ fontSize: '62.5%' }}><Story /></div>],
} as Meta;

const Template: Story<LogoProps> = (args) => <Logo {...args} />;

export const _Logo= Template.bind({});
_Logo.args = {
    size: FontSize.H1
};
