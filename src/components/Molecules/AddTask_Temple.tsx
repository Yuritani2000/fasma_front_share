import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Button from '../Atoms/Button_Temple';
import Form from '../Atoms/Form_Temple';
import { addTask } from '../../actions/Tasks_Temple/ActionCreator';

const AddTask: React.FC = () => {
  const dispatch = useDispatch();
  const [inputTask, setInputTask] = useState('');

  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    setInputTask(e.currentTarget.value);
  }

  const onClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    if (inputTask === '') {
      return
    }
    dispatch(addTask(inputTask))
    setInputTask('');
  }

  return (
    <div>
      <Form value={inputTask} onChange={onChange} />
      <Button label='add' onClick={onClick} />
    </div>
  )
}

export default AddTask;