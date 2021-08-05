import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import ConfigTemplate, { ConfigTemplateProps } from ".";
import { SkillSummaryCardProps } from "../../Molecules/SkillSummaryCard";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "../../../reducers";
import { MemoryRouter } from "react-router-dom";
import { NavigationMenuContent } from "../../../states/NavigationMenu";

const store = createStore(rootReducer)

export default {
  title: "Templates/ConfigTemplate",
  component: ConfigTemplate,
  decorators: [
    (Story) => (<Provider store={store}><MemoryRouter initialEntries={['/']}>{Story()}</MemoryRouter></Provider>),
  ],
  argTypes: {
    navigationMenuData: [],
    userName: {
    },
    selfIntroduction: {
    },
    gmailAddress: {
    },
    funMailAddress: {
    },
    otherMailAddress: {
    },
    lineQrCodeUrl: {
    },
    profileThumbnail: {
    },
    skillNamesAndPurchasers: [],
    exhibitedSkillSummariesData: [],
    purchasedSkillSummariesData: []
  },
} as Meta;

const Template: Story<ConfigTemplateProps> = (args) => <ConfigTemplate {...args} />;

const navigationMenuData = [
  {
    label: 'プロフィール',
    notificationCount: 0
  },
  {
    label: 'おしらせ',
    notificationCount: 5
  },
  {
    label: '出品したスキル',
    notificationCount: 0
  },
  {
    label: '購入したスキル',
    notificationCount: 0
  },
]

const skillSummariesData: SkillSummaryCardProps[] = [
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

export const Profile = Template.bind({});
Profile.args = {
  currentTab: NavigationMenuContent.Profile,
  navigationMenuData,
  userName: "山田太郎",
  selfIntroduction: "学部3年情シスです。プログラミング基礎はSで通過しました。デザイン系は全くわかりませんが、プログラミング系と数学系はそれなりに教えられると思います。",
  gmailAddress: "b1018001@gmail.com",
  funMailAddress: "b1018001@fun.ac.jp",
  otherMailAddress: "b1018001@yahoo.com",
  lineQrCodeUrl: "hogehogehoge",
  profileThumbnail: "https://lh3.googleusercontent.com/pw/ACtC-3cUs8S0_2sejxXaRDAwgwz5CWlDxDHqjRp4F9z2de97GcfT9rUfhFETcW8HdtQ868dTNRUiNAcST1bTtJFPZPSYf5HEmPYlz6hD9RtNZ9t1h5vaSuuy9_oO4WYX3YGKjk9WxmakRwHzS1zN_jI51ZNK=w1736-h976-no?authuser=0"
};

export const Notice = Template.bind({});
Notice.args = {
  currentTab: NavigationMenuContent.Notice,
  navigationMenuData,
  skillNamesAndPurchasers: [
    {
      skillName: "React",
      purchaser: "山田太郎"
    },
    {
      skillName: "アルゴ課題のお手伝い",
      purchaser: "明坂聡美"
    },
    {
      skillName: "ポスターデザイン",
      purchaser: "白石稔"
    },
    {
      skillName: "解析学I",
      purchaser: "利根健太朗"
    }
  ]
}

export const ExhibitedSkills = Template.bind({});
ExhibitedSkills.args = {
  currentTab: NavigationMenuContent.ExhibitedSkills,
  navigationMenuData,
  exhibitedSkillSummariesData: skillSummariesData
}

export const PurchasedSkills = Template.bind({});
PurchasedSkills.args = {
  currentTab: NavigationMenuContent.PurchasedSkills,
  navigationMenuData,
  purchasedSkillSummariesData: skillSummariesData
}