import React from 'react';
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
        disabled: {
            control: {
                type: 'boolean',
            }
        },
    },
} as Meta;

const Template: Story<FileInputProps> = (args) => {
    return <FileInput
        {...args}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {}} />
};

export const _FileInput = Template.bind({});
_FileInput.args = {
    accept: '*',
    id: 'test-file-input',
    noDisplay: false,
    disabled: false,
};
