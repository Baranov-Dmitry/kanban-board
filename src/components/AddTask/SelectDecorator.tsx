import React from 'react'
import { useSelector } from 'react-redux'
import SelectTask from './SelectTask';

const SelectDecorator = ({ id, handleSelect }: { id: string, handleSelect: (id: string) => void }) => {

  const selectableTasks = useSelector((state: BoardsState) => state.boardsStore.boards.filter(board => board.title === id))[0]
  const valuesForSelect = selectableTasks.tasks.map(task => ({ id: task.id, text: task.text }))

  return (
    <SelectTask label="Select task" values={valuesForSelect} handleSelect={handleSelect} />
  )
}

export default SelectDecorator