import React from 'react'
import NotificationHeadingElement, { NotificationHeadingElementProps } from '../../Molecules/NotificationHeadingElement'

export type NotificationHeadingListProps = {
  skillNamesAndPurchasers: NotificationHeadingElementProps[]
}

const NotificationHeadingList: React.FC<NotificationHeadingListProps> = (props) => {
  const { skillNamesAndPurchasers } = props

  return (
    <div>
      {skillNamesAndPurchasers.map((skillNameAndPurchaser, index) => {
        return <NotificationHeadingElement key={`notificationHeading${index}`} skillName={skillNameAndPurchaser.skillName} purchaser={skillNameAndPurchaser.purchaser} />
      })}
    </div>
  )
}

export default NotificationHeadingList