import React from "react";
import { Story, Meta } from '@storybook/react/types-6-0';
import FloatingActionButton, { FloatingActionButtonProps} from "./index";
import { FontSize,FontFamily } from "../../../styles/Font";
import Color from "../../../styles/Color";

export default {
    title: 'Atoms/FloatingActionButton',
    component: FloatingActionButton,
    decorators: [(Story) => <Story />],
    argTypes: {
        fontSize: {
            control: {
                type: 'select',
                options: FontSize,
            },
        },
        fontFamily: {
            control: {

                type:'select',
                options: FontFamily,
            }
        },
        color: {
            control: {
                type: 'select',
                options: Color,
            },
        },
        backgroundColor: {
            control: {
                type: 'select',
                options: Color,
            },
        },
        width: {
            control: {
                type: 'number',
            },
        },
        height: {
            control: {
                type: 'number',
            },
        },
    },
} as Meta;

const Template: Story<FloatingActionButtonProps> = (args) => <FloatingActionButton {...args} />;

const testFunc = () => {
    console.log('test');
};

export const Buttons = Template.bind({});
Buttons.args = {
    color: Color.White,
    backgroundColor: Color.Primary,
    fontSize: FontSize.Large,
    fontFamily: FontFamily.Roboto,
    label: '出品',
    handleClick: testFunc
};
