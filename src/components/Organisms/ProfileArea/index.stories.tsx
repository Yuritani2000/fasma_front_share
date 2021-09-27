import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import ProfileArea, { ProfileAreaProps } from './index';

export default {
  title: 'Organisms/ProfileArea',
  component: ProfileArea,
  decorators: [(Story) => <div style={{ width: '200px' }}><Story /></div>],
  argTypes: {
    userName: {},
    selfIntroduction: {},
    gmailAddress: {},
    funMailAddress: {},
    otherMailAddress: {},
    lineQrCord: {},
    imageUrl: {},
  },
} as Meta;

const Template: Story<ProfileAreaProps> = (args) => {
  return <ProfileArea {...args} />
};

export const profileArea = Template.bind({});
profileArea.args = {
  userName: 'ゴリョー・カーク',
  selfIntroduction: '学部3年情シスです。プログラミング基礎はSで通過しました。デザイン系は全くわかりませんが、プログラミング系と数学系はそれなりに教えられると思います。',
  gmailAddress: 'hoge@gmail.com',
  funMailAddress: 'hogehoge@fun.ac.jp',
  otherMailAddress: 'hogehogehoge@yahoo.co.jp',
  lineQrCord: 'hogehogehogehoge',
  imageUrl: 'https://lh3.googleusercontent.com/pw/ACtC-3cUs8S0_2sejxXaRDAwgwz5CWlDxDHqjRp4F9z2de97GcfT9rUfhFETcW8HdtQ868dTNRUiNAcST1bTtJFPZPSYf5HEmPYlz6hD9RtNZ9t1h5vaSuuy9_oO4WYX3YGKjk9WxmakRwHzS1zN_jI51ZNK=w1736-h976-no?authuser=0',
};