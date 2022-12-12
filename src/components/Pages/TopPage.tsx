import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getTopPageSkills } from '../../actions/Skills/ActionCreator'
import { postSignIn } from '../../actions/Utari/ActionCreator'
import RootState from '../../states'
import TopTemplate from '../Templates/TopTemplate'


const TopPage: React.FC = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getTopPageSkills.request({ category: 1, offset: 0, limit: 5 }));
    dispatch(getTopPageSkills.request({ category: 2, offset: 0, limit: 5 }));
    dispatch(getTopPageSkills.request({ category: 3, offset: 0, limit: 5 }));
    dispatch(postSignIn.request({id: "test",password: "test"}))
  }, [dispatch])
  const topPageSkills = useSelector<RootState, RootState['topPageSkills']>(state => state.topPageSkills);
  return (
    <TopTemplate topPageSkills={topPageSkills} />
  )
}

export default TopPage;