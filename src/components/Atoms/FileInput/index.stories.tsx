import React, { useState } from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import FileInput, { FileInputProps } from './index';
import { FontSize } from '../../../styles/Font';
import Color from '../../../styles/Color';

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
    },
} as Meta;

const Template: Story<FileInputProps> = (args) => {
    const [value, setValue] = useState('test');
    return <FileInput
        {...args}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {}} />
};

export const Inputs = Template.bind({});
Inputs.args = {
    accept: '*',
    id: 'test-file-input',
    noDisplay: false,
};
