import React from 'react'
import AddTask from '../Molecules/AddTask_Temple'
import GridArea from '../../styles/GridArea'

type Props = {
  area: string;
}

const AddTaskArea: React.FC<Props> = (props) => {
  const { area } = props
  return (
    <GridArea area={area}>
      <AddTask />
    </GridArea>
  )
}

export default AddTaskArea