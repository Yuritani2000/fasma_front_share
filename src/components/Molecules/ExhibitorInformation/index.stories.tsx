import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import ExhibitorInformation, { ExhibitorInformationProps } from './index'

export default {
  title: "Molecules/ExhibitorInformation",
  component: ExhibitorInformation,
  decorators: [
    (Story) => (<Story/>),
  ],
  argTypes: {
    ExhibitorName: {
      control: {
        type: 'string'
      }
    },
    hasGmailAddress: {
      control: {
        type: 'boolean'
      }
    },
    hasFunMailAddress: {
      control: {
        type: 'boolean'
      }
    },
    hasOtherMailAddress: {
      control: {
        type: 'boolean'
      }
    },
    hasLineQrCord: {
      control: {
        type: 'boolean'
      }
    },

  },
} as Meta;

const Template: Story<ExhibitorInformationProps> = (args) => <ExhibitorInformation {...args} />;

export const _Header = Template.bind({});
_Header.args = {
  exhibitorName: 'ゴリョー・カーク', 
  hasGmailAddress: true,
  hasFunMailAddress: true,
  hasOtherMailAddress: true,
  hasLineQrCord: true,
};
