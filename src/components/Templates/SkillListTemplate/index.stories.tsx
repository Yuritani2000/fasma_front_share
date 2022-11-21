import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
//Templates
import SkillListTemplate, {SkillListTemplateProps} from './index'
//utils
import ReduxProvider from '../../../utils/Fixture/ReduxProvider';

export default {
  title: "Templates/SkillListTemplate",
  component: SkillListTemplate,
  decorators: [
    (Story) => (<Story />),
  ],
  parameters:{
    layout:'fullscreen',
  },
  argTypes: {
    Category: {},
    skills: {},
  },
} as Meta;

const Template: Story<SkillListTemplateProps> = (args) => <ReduxProvider component={<SkillListTemplate {...args} />}/>;
export const _SkillListTemplate = Template.bind({});
_SkillListTemplate.args = {
  category: [{label:'category'}],
  skills:[
      {
        "id":1,
        "name":"Proccesing",
        "thumbnail":"https://pbs.twimg.com/media/EFEV9KxVAAANguo?format=jpg&name=small",
        "description":"一学年のProccessingはSで通過しました。Javaの知識もあるので弾幕ゲームを作る際に必要なクラスについても教えることができます。",
        "price":10,
        "categories_name":"Programing",
        "status": 0,
        "seller_name": "ビードル",
        "seller_school_mail": "b1001017@fun.ac.jp",
        "buyer_name": "ポッポ",
        "buyer_school_mail": "b1002018@fun.ac.jp",
        "transaction_update_at": 1660897711943
      },
      {
        "id":2,
        "name":"Proccesing",
        "thumbnail":"https://pbs.twimg.com/media/Edo3SPCUcAEY7Z6?format=jpg&name=small",
        "description":"一学年のProccessingはSで通過しました。Javaの知識もあるので弾幕ゲームを作る際に必要なクラスについても教えることができます。",
        "price":10,
        "categories_name":"Programing",
        "status": 0,
        "seller_name": "コクーン",
        "seller_school_mail": "b1001017@fun.ac.jp",
        "buyer_name": "ピジョン",
        "buyer_school_mail": "b1002018@fun.ac.jp",
        "transaction_update_at": 1660897772192
      }
    ]
};