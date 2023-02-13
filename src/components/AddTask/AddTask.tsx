import React, { useRef, useState } from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux/es/hooks/useDispatch';
import styled from 'styled-components'
import { hoverPointer, TaskBoard } from '../../contants';
import { addNewTask } from '../reducer/boardsSlice';
import FormSelect from './FormSelect';
import GetTasks from './GetTasks';
import InputTask from './InputTask';


const AddTask = ({ boardName, sourceOfTasks }: { boardName: string, sourceOfTasks: string }) => {

  // if (sourceOfTasks !== null) {
  //   const selectableTasks = useSelector((state: BoardsState) => state.boardsStore.boards.filter(board => board.title === sourceOfTasks))[0].tasks.map(task => ({ id: task.id, text: task.text }))
  //   const valuesForSelect = selectableTasks.tasks.map(task => ({ id: task.id, text: task.text }))
  // }

  const dispatch = useDispatch()

  // if (childred.children !== undefined) {
  //   console.log(childred.children)
  // }

  const [showAddTask, setShowAddTask] = useState(false)


  const handleAdd = (text: string) => {
    dispatch(addNewTask({ boardName, text: text }))
    setShowAddTask(prev => !prev)
  }

  return (
    <>
      {!showAddTask
        ? <BoardsTaskButton onClick={() => setShowAddTask(prev => !prev)}>Add card</BoardsTaskButton>
        : sourceOfTasks === null
          ? <InputTask handleAdd={(e) => { console.log(e) }} />
          : <GetTasks id={sourceOfTasks} />
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