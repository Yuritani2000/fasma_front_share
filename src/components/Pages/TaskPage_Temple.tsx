import React, { useEffect } from 'react';
import TaskTemplate from '../Templates/TaskTemplate_Temple';
import { useDispatch } from 'react-redux';
import { getUsers } from '../../actions/User_Temple/ActionCreator';

// ここでこのページを描画するために必要なデータを取得する
const TaskPage: React.FC = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getUsers.request({ id: "user01" }));
  })
  return (
    <TaskTemplate />
  )
}

export default TaskPage;