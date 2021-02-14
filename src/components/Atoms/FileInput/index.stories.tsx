import React, { useState } from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import FileInput, { FileInputProps } from './index';

export default {
    title: 'Atoms/FileInput',
    component: FileInput,
    decorators: [(Story) => <div style={{ width: '200px' }}><Story /></div>],
    argTypes: {
        accept: {
            control: {
                type: 'string',
            },
        },
        id: {
            control: {
                type: 'string',
            },
        },
        noDisplay: {
            control: {
                type: 'boolean',
            },
        },
        value: {
            control: {
                type: 'string',
            }
        },
        disabled: {
            control: {
                type: 'boolean',
            }
        },
    },
} as Meta;

const Template: Story<FileInputProps> = (args) => {
    const [value, setValue] = useState('https://www.fun.ac.jp/wp-content/themes/fun_2012/img/title-ja.svg');
    return <FileInput
        {...args}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {}} />
};

export const Inputs = Template.bind({});
Inputs.args = {
    accept: '*',
    id: 'test-file-input',
    noDisplay: false,
    disabled: false,
};
