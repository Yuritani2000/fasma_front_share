import React from 'react'
import Space from '../../../styles/Space'
import { NotificationType } from '../../Organisms/PurchaserOrExhibitorInfo'
import SkillPurchaseArea from '../../Organisms/SkillPurchaseArea'
import { Container } from './StyledComponent'

export type SkillPurchaseTempleteProps = {
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

const SkillPurchaseTemplete: React.FC<SkillPurchaseTempleteProps> = (props) => {
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
        gmailAdress={gmailAddress}
        funMailAdress={funMailAddress}
        lineQrCodeUrl={lineQrCodeUrl}
        otherMailAdress={otherMailAddress}
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
export default SkillPurchaseTemplete