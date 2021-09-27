import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import SkillSummaryCards, { SkillSummaryCardsProps } from './index';
import { SkillSummaryCardProps } from '../../Molecules/SkillSummaryCard';

export default {
  title: 'Organisms/SkillSummaryCards',
  component: SkillSummaryCards,
  decorators: [(Story) => <div style={{ width: '200px' }}><Story /></div>],
  argTypes: {
    skillSummariesData: {
    }
  },
} as Meta;

const Template: Story<SkillSummaryCardsProps> = (args) => {
  return <SkillSummaryCards {...args} />
};

const mockData: SkillSummaryCardProps[] = [
  {
    skillName: '【線形代数学I】逆行列の求め方教えます',
    skillDescription: '線形代数学の講義を寝過ごしてしまって全然逆行列の求め方がわからない！という方に向けて、逆行列の求め方をわかりやすく教えます。購入された方にはSkypeのIDを送ります。',
    imageUrl: 'https://lh3.googleusercontent.com/pw/ACtC-3cUs8S0_2sejxXaRDAwgwz5CWlDxDHqjRp4F9z2de97GcfT9rUfhFETcW8HdtQ868dTNRUiNAcST1bTtJFPZPSYf5HEmPYlz6hD9RtNZ9t1h5vaSuuy9_oO4WYX3YGKjk9WxmakRwHzS1zN_jI51ZNK=w1736-h976-no?authuser=0'
  },
  {
    skillName: 'Java演習も怖くない！クラスの継承を教えます！！',
    skillDescription: '情報処理演習の授業中課題が全然終わらない！という方必見！あのややこしいクラスの継承についてわかりやすく教えます。',
    imageUrl: 'https://lh3.googleusercontent.com/pw/ACtC-3cUs8S0_2sejxXaRDAwgwz5CWlDxDHqjRp4F9z2de97GcfT9rUfhFETcW8HdtQ868dTNRUiNAcST1bTtJFPZPSYf5HEmPYlz6hD9RtNZ9t1h5vaSuuy9_oO4WYX3YGKjk9WxmakRwHzS1zN_jI51ZNK=w1736-h976-no?authuser=0'
  },
  {
    skillName: '左バック駐車を上手にする方法',
    skillDescription: '免許を取ったばかりで全然うまく運転できない！駐車場で後ろの車を待たせるのが怖い！という方に向けて、左バック駐車を上手にする方法を教えます！実は、左バックはコツを掴んでしまえばとっても簡単！スキルを購入された方には私の車を貸し出します（保険には別途加入してもらいます）。',
    imageUrl: 'https://lh3.googleusercontent.com/pw/ACtC-3cUs8S0_2sejxXaRDAwgwz5CWlDxDHqjRp4F9z2de97GcfT9rUfhFETcW8HdtQ868dTNRUiNAcST1bTtJFPZPSYf5HEmPYlz6hD9RtNZ9t1h5vaSuuy9_oO4WYX3YGKjk9WxmakRwHzS1zN_jI51ZNK=w1736-h976-no?authuser=0'
  },
  {
    skillName: 'プログラミング基礎がわからない！〜C言語のポインタを基礎から理解する〜',
    skillDescription: 'プログラミング基礎でC言語をやってるのに、ポインタが全然わからなくて単位が落ちそう…という方に向けて教えます。実は、ポインタというのは「変数の住所」を示すものなのです。購入された方にDiscordのID教えます。',
    imageUrl: 'https://lh3.googleusercontent.com/pw/ACtC-3cUs8S0_2sejxXaRDAwgwz5CWlDxDHqjRp4F9z2de97GcfT9rUfhFETcW8HdtQ868dTNRUiNAcST1bTtJFPZPSYf5HEmPYlz6hD9RtNZ9t1h5vaSuuy9_oO4WYX3YGKjk9WxmakRwHzS1zN_jI51ZNK=w1736-h976-no?authuser=0'
  },
  {
    skillName: '【ハードウェア設計】パイプライン処理教えます',
    skillDescription: 'ハードウェア設計のパイプライン処理が全然わからないという方に向けて教えます。主なテーマとなるのは、「各アセンブリ命令の使うステージの種類」、「データハザードとは何か」です。購入された方には、SkypeのIDを送ります。',
    imageUrl: 'https://lh3.googleusercontent.com/pw/ACtC-3cUs8S0_2sejxXaRDAwgwz5CWlDxDHqjRp4F9z2de97GcfT9rUfhFETcW8HdtQ868dTNRUiNAcST1bTtJFPZPSYf5HEmPYlz6hD9RtNZ9t1h5vaSuuy9_oO4WYX3YGKjk9WxmakRwHzS1zN_jI51ZNK=w1736-h976-no?authuser=0'
  },
];

export const _SkillSummaryCards = Template.bind({});
_SkillSummaryCards.args = {
  skillSummariesData: mockData
};