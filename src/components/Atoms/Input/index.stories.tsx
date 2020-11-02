import React, { useState } from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Input, { InputProps } from './index';
import { FontSize } from '../../../styles/Font';
import Color from '../../../styles/Color';

export default {
    title: 'Atoms/Inputs',
    component: Input,
    decorators: [(Story) => <div style={{ fontSize: '62.5%', width: '200px' }}><Story /></div>],
    argTypes: {
        fontSize: {
            control: {
                type: 'select',
                options: FontSize,
            },
        },
        backgroundColor: {
            control: {
                type: 'select',
                options: Color,
            },
        },
        borderColor: {
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
        value: {
            control: {
                type: 'string',
            }
        },
        type: {
            control: {
                type: 'select',
                options: [
                    'button',
                    'checkbox',
                    'color',
                    'date',
                    'datetime-local',
                    'email',
                    'file',
                    'hidden',
                    'image',
                    'month',
                    'number',
                    'password',
                    'radio',
                    'range',
                    'reset',
                    'search',
                    'submit',
                    'tel',
                    'text',
                    'time',
                    'url',
                    'week',
                ]
            }
        }
    },
} as Meta;

const Template: Story<InputProps> = (args) => {
    const [value, setValue] = useState('test');
    return <Input
        {...args}
        value={value}
        onChange={(e: string) => setValue(e)} />
};

export const Inputs = Template.bind({});
Inputs.args = {
    placeholder: 'test',
    fontSize: FontSize.Medium,
    borderColor: Color.LightGray,
};
