import React from 'react'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Route, Switch, useHistory } from 'react-router-dom'
import RootState from '../../../states'
import { NavigationMenuContent } from '../../../states/NavigationMenu'
import { NotificationHeadingElementProps } from '../../Molecules/NotificationHeadingElement'
import { SkillSummaryCardProps } from '../../Molecules/SkillSummaryCard'
import NavigationMenu, { NavigationMenuData } from '../../Organisms/NavigationMenu'
import NotificationHeadingList from '../../Organisms/NotificationHeadingList'
import ProfileArea from '../../Organisms/ProfileArea'
import SkillSummaryCards from '../../Organisms/SkillSummaryCards'
import { Container, MainArea, StyledNavigationMenu } from './StyledComponent'

export type ConfigTempleteProps = {
  currentTab: NavigationMenuContent,
  navigationMenuData: NavigationMenuData[],
  userName: string,
  selfIntroduction?: string,
  gmailAddress?: string,
  funMailAddress?: string,
  otherMailAddress?: string,
  lineQrCodeUrl?: string,
  profileThumbnail?: string,
  skillNamesAndPurchasers: NotificationHeadingElementProps[],
  exhibitedSkillSummariesData: SkillSummaryCardProps[],
  purchasedSkillSummariesData: SkillSummaryCardProps[]
}

const ConfigTemplete: React.FC<ConfigTempleteProps> = (props) => {
  const {
    currentTab,
    navigationMenuData,
    userName,
    selfIntroduction = "",
    gmailAddress = "",
    funMailAddress = "",
    otherMailAddress = "",
    lineQrCodeUrl = "",
    profileThumbnail = "",
    skillNamesAndPurchasers,
    exhibitedSkillSummariesData,
    purchasedSkillSummariesData
  } = props

  const history = useHistory()
  useEffect(() => {
    history.push(`config/${currentTab}`)
  })

  return (
    <Container>
      <StyledNavigationMenu>
        <NavigationMenu navigationMenuData={navigationMenuData} />
      </StyledNavigationMenu>
      <MainArea>
        <Switch>
          <Route path="/config/Profile" render={() => <ProfileArea userName={userName} selfIntroduction={selfIntroduction} gmailAddress={gmailAddress} funMailAddress={funMailAddress} lineQrCord={lineQrCodeUrl} otherMailAddress={otherMailAddress} imageUrl={profileThumbnail} />} />
          <Route path="/config/Notice" render={() => <NotificationHeadingList skillNamesAndPurchasers={skillNamesAndPurchasers} />} />
          <Route path="/config/ExhibitedSkills" render={() => <SkillSummaryCards skillSummariesData={exhibitedSkillSummariesData} />} />
          <Route path="/config/PurchasedSkills" component={() => <SkillSummaryCards skillSummariesData={purchasedSkillSummariesData} />} />
        </Switch>
      </MainArea>
    </Container>
  )
}

export default ConfigTemplete