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
      {"id":1,"name":"Proccesing","category":"Programing","status": 2,
      "description":"一学年のProccessingはSで通過しました。Javaの知識もあるので弾幕ゲームを作る際に必要なクラスについても教えることができます。",
      "price":10,"thumbnail":"https://pbs.twimg.com/media/EFEV9KxVAAANguo?format=jpg&name=small"},
      {"id":2,"name":"Proccesing","category":"Programing","status": 2,
      "description":"一学年のProccessingはSで通過しました。Javaの知識もあるので弾幕ゲームを作る際に必要なクラスについても教えることができます。",
      "price":10,"thumbnail":"https://pbs.twimg.com/media/Edo3SPCUcAEY7Z6?format=jpg&name=small"}]
};