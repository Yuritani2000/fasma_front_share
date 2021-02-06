import React, { useState } from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Input, { InputProps } from './index';
import { FontSize } from '../../../styles/Font';
import Color from '../../../styles/Color';

export default {
    title: 'Atoms/Inputs',
    component: Input,
    decorators: [(Story) => <div style={{ width: '200px' }}><Story /></div>],
    argTypes: {
        fontSize: {
            control: {
                type: 'select',
                options: Object.keys(FontSize).filter(k => typeof FontSize[k as keyof typeof FontSize] === "string"),
            },
        },
        backgroundColor: {
            control: {
                type: 'select',
                options: Object.keys(Color).filter(k => typeof Color[k as keyof typeof Color] === "string"),
            },
        },
        borderColor: {
            control: {
                type: 'select',
                options: Object.keys(Color).filter(k => typeof Color[k as keyof typeof Color] === "string"),
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
    fontSize: 'Medium',
    borderColor: 'LightGray',
};
