import React from 'react'
import { useHistory } from 'react-router-dom'
import NotificationHeadingElement, { NotificationHeadingElementProps } from '../../Molecules/NotificationHeadingElement'

export type NotificationHeadingListProps = {
  skillNamesAndPurchasers: NotificationHeadingElementProps[]
}

const NotificationHeadingList: React.FC<NotificationHeadingListProps> = (props) => {
  const { skillNamesAndPurchasers } = props
  const history = useHistory();

  const onClick = () => {
    history.push('/purchase')
  }

  return (
    <div>
      {skillNamesAndPurchasers.map((skillNameAndPurchaser, index) => {
        return <NotificationHeadingElement key={`notificationHeading${index}`} skillName={skillNameAndPurchaser.skillName} purchaser={skillNameAndPurchaser.purchaser} handleClick={onClick} />
      })}
    </div>
  )
}

export default NotificationHeadingList