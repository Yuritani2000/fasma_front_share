import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import RootState from '../../states/index';
//Template
import SkillListTemplate from '../Templates/SkillListTemplate';
//Action
import { getSkills } from '../../actions/Skills/ActionCreator';
//utils
import Category from '../../utils/Other/Json/Category';

const SkillListPage: React.FC = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getSkills.request({ category: 1, offset: 0, limit: 5 }));
  }, [dispatch]);
  const skills = useSelector<RootState, RootState['skills']>(state => state.skills);
  return (
      <SkillListTemplate  category={Category} skills={skills}/>
  )
}

export default SkillListPage;