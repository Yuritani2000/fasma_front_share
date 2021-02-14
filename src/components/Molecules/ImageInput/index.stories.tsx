import React, { useState } from 'react';
import { Story, Meta } from "@storybook/react/types-6-0";
import ImageInput, { ImageInputProps } from './index'
import { ImageSize } from '../../Atoms/Image/Image';
import { StyledLabelProps } from './StyledComponents/StyledLabel';

export default {
    title: "Molecules/ImageInput",
    component: ImageInput,
    decorators: [
        (Story) => (<Story />),
    ],
    argTypes: {
        size: {
            control: {
                type: 'number',
            }
        },
        sizeTypes: {
            control: {
                type: 'select',
                options: Object.keys(ImageSize).filter(k => typeof ImageSize[k as keyof typeof ImageSize] === "string"),
            }
        },
        maxDataSizeMegaByte: {
            control: {
                type: 'number',
            }
        },
        isEditing: {
            control: {
                type: 'boolean',
            }
        }
    },
} as Meta;

const Template: Story<ImageInputProps> = (args) => {
    const [imageUrl, setImageUrl] = useState('');
    return <ImageInput {...args} imageUrl={imageUrl} setImageUrl={setImageUrl}
    />
}

export const _ImageInput = Template.bind({});
_ImageInput.args = {
    size: 300,
    sizeTypes: 'MEDIUM',
    maxDataSizeMegaByte: 10,
    isEditing: true,
};