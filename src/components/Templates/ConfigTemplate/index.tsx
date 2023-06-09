import React from 'react'
import { useEffect } from 'react'
import { Route, Switch, useHistory } from 'react-router-dom'
// Molecules
import { NotificationHeadingElementProps } from '../../Molecules/NotificationHeadingElement'
import { SkillSummaryCardProps } from '../../Molecules/SkillSummaryCard'
// Organisms
import Header from '../../Organisms/Header';
import NavigationMenu, { NavigationMenuData } from '../../Organisms/NavigationMenu'
import NotificationHeadingList from '../../Organisms/NotificationHeadingList'
import ProfileArea from '../../Organisms/ProfileArea'
import SkillSummaryCards from '../../Organisms/SkillSummaryCards'

import { Container, HeaderContainer, MainArea, StyledNavigationMenu } from './StyledComponent'

export type ConfigTemplateProps = {
  currentTab: string,
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

const ConfigTemplate: React.FC<ConfigTemplateProps> = (props) => {
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

  const history = useHistory();

  useEffect(() => {
    history.replace(`${currentTab}`);
  }, [history, currentTab])

  const ProfileAreaComponent = <ProfileArea userName={userName} selfIntroduction={selfIntroduction} gmailAddress={gmailAddress} funMailAddress={funMailAddress} lineQrCord={lineQrCodeUrl} otherMailAddress={otherMailAddress} imageUrl={profileThumbnail} />
  const NotificationHeadingListComponent = <NotificationHeadingList skillNamesAndPurchasers={skillNamesAndPurchasers} />
  const ExhibitedSkillSummaryCardsComponent = <SkillSummaryCards skillSummariesData={exhibitedSkillSummariesData} />
  const PurchasedSkillSummaryCardsComponent = <SkillSummaryCards skillSummariesData={purchasedSkillSummariesData} />


  return (
    <Container>
      <HeaderContainer>
        <Header isSearchBox={true} />
      </HeaderContainer>
      <StyledNavigationMenu>
        <NavigationMenu navigationMenuData={navigationMenuData} />
      </StyledNavigationMenu>
      <MainArea>
        <Switch>
          <Route path="/config/Profile" component={() => ProfileAreaComponent} />
          <Route path="/config/Notice" component={() => NotificationHeadingListComponent} />
          <Route path="/config/ExhibitedSkills" component={() => ExhibitedSkillSummaryCardsComponent} />
          <Route path="/config/PurchasedSkills" component={() => PurchasedSkillSummaryCardsComponent} />
        </Switch>
      </MainArea>
    </Container>
  )
}

export default ConfigTemplate