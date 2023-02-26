import React, { useCallback, useState } from 'react'
import { useDispatch } from 'react-redux/es/hooks/useDispatch';
import styled from 'styled-components'
import { hoverPointer } from '../../contants';
import { addNewTask, moveTask } from '../reducer/boardsSlice';
import SelectDecorator from './SelectDecorator';
import InputTask from './InputTask';

const AddTask = ({ boardName, sourceOfTasks }: { boardName: string, sourceOfTasks: string | null }) => {

  console.log("AddTask")

  const dispatch = useDispatch()

  const [showAddTask, setShowAddTask] = useState(false)

  const handleAdd = useCallback(
    (text: string) => {
      dispatch(addNewTask({ boardName, text: text }))
      setShowAddTask(prev => !prev)
    },
    [],
  )

  // const handleAdd = (text: string) => {
  //   dispatch(addNewTask({ boardName, text: text }))
  //   setShowAddTask(prev => !prev)
  // }
  const handleSelect = useCallback(
    (id: string) => {
      dispatch(moveTask({ id, from: sourceOfTasks, to: boardName, }))
      setShowAddTask(prev => !prev)
    },
    [],
  )

  // const handleSelect = (id: string) => {
  //   dispatch(moveTask({ id, from: sourceOfTasks, to: boardName, }))
  //   setShowAddTask(prev => !prev)
  // }

  return (
    <>
      {!showAddTask
        ? <BoardsTaskButton onClick={() => setShowAddTask(prev => !prev)}>Add card</BoardsTaskButton>
        : sourceOfTasks === null
          ? <InputTask handleAdd={handleAdd} />
          : <SelectDecorator id={sourceOfTasks} handleSelect={handleSelect} />
      }
    </>
  )
}

const BoardsTaskButton = styled.div`
  font-family: "Roboto";
  font-size: 18px;
  color: #5e6c84;
  position: relative;
  width: 75px;
  border-radius: 5px;
  padding: 4px 7px 3px 25px;

  &:before {
    content: "+";
    font-size: 28px;
    color: #5e6c84;
    position: absolute;
    top: -3px;
    left: 6px;
  }

  ${hoverPointer}

  &:hover {
    background-color: #fff;
  }
`

export default AddTask