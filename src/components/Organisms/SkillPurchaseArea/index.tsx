import React from 'react'
import { useState } from 'react'
import Color from '../../../styles/Color'
import { FontSize } from '../../../styles/Font'
import Button, { ButtonTypes } from '../../Atoms/Button'
import Image from '../../Atoms/Image/Image'
import Text from '../../Atoms/Text'
import ExhibitorInformation from '../../Molecules/ExhibitorInformation'
import PurchaseConfirmModal from '../PurchaseConfirmModal'
import PurchaserOrExhibitorInformation from '../PurchaserOrExhibitorInfo'
import { Container, MoneyUnit, PurchaseButton, SkillDescription, SkillPrice, SkillPurchaseCard, ThumbnailAndSellerProfile } from './StyledComponents'

export type SkillPurchaseAreaProps = {
  skillName: string,
  skillThumbnail?: string,
  sellerName: string,
  gmailAdress?: string,
  funMailAdress?: string,
  otherMailAdress?: string,
  lineQrCodeUrl?: string,
  skillDescription?: string,
  skillTags?: string[],
  skillPrice: number,
  isPurchased: boolean,
  purchasedMonth?: number,
  purchasedDate?: number
}

const SkillPurchaseArea: React.FC<SkillPurchaseAreaProps> = (props) => {
  const {
    skillName,
    skillThumbnail = '',
    sellerName,
    gmailAdress = '',
    funMailAdress = '',
    otherMailAdress = '',
    lineQrCodeUrl = '',
    skillDescription = '',
    skillTags = [],
    skillPrice,
    isPurchased,
    purchasedMonth = 0,
    purchasedDate = 0
  } = props

  const [isDisplayConfirmModal, setIsDisplayConfirmModal] = useState(false);
  const skillPriceWithCommas = skillPrice.toLocaleString();

  return (
    <Container>
      {isDisplayConfirmModal && <PurchaseConfirmModal skillPrice={skillPrice} isFunMailAddress={funMailAdress !== ''} isGmailAddress={gmailAdress !== ''} isLineQrCode={lineQrCodeUrl !== ''} isOtherMailAddress={otherMailAdress !== ''} handleClickCloseButton={() => setIsDisplayConfirmModal(!isDisplayConfirmModal)} handleClickPurchaseButton={() => setIsDisplayConfirmModal(!isDisplayConfirmModal)} />}
      {isPurchased && <PurchaserOrExhibitorInformation isVisible={true} month={purchasedMonth} date={purchasedDate} notificationType="Sold" funMailAddress={funMailAdress} gmailAddress={gmailAdress} lineQrCodeUrl={lineQrCodeUrl} otherMailAddress={otherMailAdress} />}
      <SkillPurchaseCard isPurchased={isPurchased}>
        <Text isBold={true} children={skillName} textType='Default' size='H2' omit={true} omittingLineNumber={1} />
        <Text isBold={false} children={"ホーム > プログラミング > " + skillName} textType='Default' size='Small' omit={true} omittingLineNumber={1} />
        <ThumbnailAndSellerProfile>
          <Image url={skillThumbnail} sizeTypes={"LARGE"} />
          <ExhibitorInformation exhibitorName={sellerName} hasFunMailAddress={funMailAdress !== ''} hasGmailAddress={gmailAdress !== ''} hasLineQrCord={lineQrCodeUrl !== ''} hasOtherMailAddress={otherMailAdress !== ''} />
        </ThumbnailAndSellerProfile>
        <SkillDescription>
          <Text isBold={false} children={skillDescription} textType='Default' size='Medium' />
        </SkillDescription>
        <SkillPrice>
          <Text isBold={true} children={skillPriceWithCommas} textType='Default' size='H2' />
          <MoneyUnit>
            <Text isBold={false} children="FUNney" textType='Default' size='Medium' />
          </MoneyUnit>
        </SkillPrice>
        <PurchaseButton>
          {isPurchased ? <Button label="購入済みです" buttonType={ButtonTypes.secondary} fontColor={Color.White} fontSize={FontSize.H3} width={500} />
            : <Button label="購入確認に進む" fontSize={FontSize.H3} width={500} handleClick={() => setIsDisplayConfirmModal(!isDisplayConfirmModal)} />}
        </PurchaseButton>
      </SkillPurchaseCard>
    </Container>
  )
}

export default SkillPurchaseArea