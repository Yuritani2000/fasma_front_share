import React, { useState } from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import TextArea, { TextAreaProps } from './TextArea';
import { FontSize } from '../../../styles/Font';
import Color from '../../../styles/Color';
import { boolean } from '@storybook/addon-knobs';

export default {
    title: 'Atoms/TextArea',
    component: TextArea,
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
        height: {
            control: {
                type: 'number',
            },
        },
        disabled: {
            control: {
                type: 'boolean',
            },
        },
        value: {
            control: {
                type: 'string',
            }
        },
    },
} as Meta;

const Template: Story<TextAreaProps> = (args) => {
    const [value, setValue] = useState('test');
    return <TextArea
        {...args}
        value={value}
        onChange={(e: string) => setValue(e)} />
};

export const _TextArea = Template.bind({});
_TextArea.args = {
    fontSize: 'Medium',
    // borderColor: 'LightGray',
    backgroundColor: 'White',
    width: 250,
    height: 100,
    disabled: false,
    value: 'This is test text.',
};
