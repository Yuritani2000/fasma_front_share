import React from 'react'
import SkillPurchaseTemplete from '../Templates/SkillPurchaseTemplete'

const PurchasePage: React.FC = () => {
  return (
    <div>
      <SkillPurchaseTemplete skillName="React"
        skillDescription="Reactとは、Facebook社が開発したWebサイト上のUIパーツを構築するためのJavaScriptライブラリです。React.jsやReact.JSと呼ばれることもあります。よくAngularJSやjQueryと比較されますが、React自体はフレームワークでなく、あくまでもUIを構築するだけのライブラリです。"
        skillThumbnail="https://bit.ly/3igJ0Vu"
        sellerName="山田太朗"
        gmailAddress="b1018001@gmail.com"
        funMailAddress="b1018001@fun.ac.jp"
        otherMailAddress="b1018001@yahoo.com"
        lineQrCodeUrl="https://bit.ly/3Cg1IF1"
        skillTags={["Web", "UI", "フロントエンド"]}
        skillPrice={1000000}
        isPurchased={false}
        purchasedMonth={4}
        purchasedDate={1}
        notificationType='Bought' />
    </div>
  )
}

export default PurchasePage;