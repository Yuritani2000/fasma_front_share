import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getTopPageSkills } from '../../actions/Skills/ActionCreator'
import RootState from '../../states'
import TopTemplate from '../Templates/TopTemplate'

const TopPage: React.FC = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getTopPageSkills.request({ category: "programming", number: 1, quantity: 5, sort: "new", token: "hoge" }));
    dispatch(getTopPageSkills.request({ category: "design", number: 1, quantity: 5, sort: "new", token: "hoge" }));
    dispatch(getTopPageSkills.request({ category: "math", number: 1, quantity: 5, sort: "new", token: "hoge" }));
  }, [])
  const topPageSkills = useSelector<RootState, RootState['topPageSkills']>(state => state.topPageSkills);
  return (
    <TopTemplate topPageSkills={topPageSkills} />
  )
}

export default TopPage;