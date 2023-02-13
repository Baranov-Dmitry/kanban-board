import React from 'react'
import { useSelector } from 'react-redux'
import Select from './SelectTask';

const GetTasks = ({ id }: { id: string }) => {

  const selectableTasks = useSelector((state: BoardsState) => state.boardsStore.boards.filter(board => board.title === id))[0]
  const valuesForSelect = selectableTasks.tasks.map(task => ({ id: task.id, text: task.text }))

  return (
    <Select label="Select task" values={valuesForSelect} onChange={(e: any) => console.log(e)} />
  )
}

export default GetTasks