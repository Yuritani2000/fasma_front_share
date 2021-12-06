import React, { useState } from 'react';
import { Story, Meta } from "@storybook/react/types-6-0";
import Card, { Props, StyledCardProps, StyledCardSizeType, StyledCardSizeDefault } from './index'

export default {
    title: "Molecules/Card",
    component: Card,
    decorators: [
        (Story) => (<div style={{ width: '80%' }}><Story /></div>),
    ],
    argTypes: {
        rotation: {
            control: {
                type: 'boolean'
            }
        }
    }
} as Meta;

const Template: Story<Props> = (args) => {
    const [value, setValue] = useState(
        {
            label: "選択してください",
        });
    return <Card {...args}

    />
}

export const _Card = Template.bind({});
_Card.args = {
    cardProps: {
        styledCardSize: StyledCardSizeDefault.SKILL,
        backgroundColor: "#aacccc"
    },
    rotation: false,
};