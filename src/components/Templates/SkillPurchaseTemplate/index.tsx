import React from 'react'
import Space from '../../../styles/Space'
import { NotificationType } from '../../Organisms/PurchaserOrExhibitorInfo'
import SkillPurchaseArea from '../../Organisms/SkillPurchaseArea'

export type SkillPurchaseTemplateProps = {
  skillName: string,
  skillThumbnail?: string,
  sellerName: string,
  gmailAddress?: string;
  funMailAddress?: string;
  otherMailAddress?: string;
  lineQrCodeUrl?: string,
  skillDescription?: string,
  skillTags?: string[],
  skillPrice: number,
  isPurchased: boolean,
  purchasedMonth?: number,
  purchasedDate?: number,
  notificationType?: keyof typeof NotificationType;
}

const SkillPurchaseTemplate: React.FC<SkillPurchaseTemplateProps> = (props) => {
  const {
    skillName,
    skillThumbnail = '',
    sellerName,
    gmailAddress = '',
    funMailAddress = '',
    otherMailAddress = '',
    lineQrCodeUrl = '',
    skillDescription = '',
    skillTags = [],
    skillPrice,
    isPurchased,
    purchasedMonth = 0,
    purchasedDate = 0,
  } = props

  return (
    <div>
      <SkillPurchaseArea
        skillName={skillName}
        skillThumbnail={skillThumbnail}
        sellerName={sellerName}
        gmailAddress={gmailAddress}
        funMailAddress={funMailAddress}
        lineQrCodeUrl={lineQrCodeUrl}
        otherMailAddress={otherMailAddress}
        purchasedMonth={purchasedMonth}
        purchasedDate={purchasedDate}
        skillDescription={skillDescription}
        skillTags={skillTags}
        skillPrice={skillPrice}
        isPurchased={isPurchased}
        marginTop={Space.X_LARGE}
        marginLeft='auto'
        marginRight='auto'
      />
    </div>
  )

}
export default SkillPurchaseTemplate