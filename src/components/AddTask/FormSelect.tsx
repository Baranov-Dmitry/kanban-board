import React, { useRef } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { TaskBoard } from '../../contants'
import { ButtonSubmit } from './InputTask'

const FormSelect = ({ boardName, sourceOfTasks }: { boardName: string, sourceOfTasks: string }) => {

  const selectRef = useRef<HTMLSelectElement>(null)
  const selectableTasks = useSelector((state: BoardsState) => state.boardsStore.boards.filter(board => board.title === sourceOfTasks))[0]
  console.log(selectableTasks);

  const handleSubmitUpdate = () => {

  }

  return (
    <form onSubmit={handleSubmitUpdate}>
      <select ref={selectRef} name="tasks">
        <option value="">--Please choose an option--</option>
        {selectableTasks.tasks.map(task => (
          <option value={task.id}>{task.text}</option>
        ))}
      </select>
      <ButtonSubmit type='submit'>Submit</ButtonSubmit>
    </form>
  )
}

export default FormSelect