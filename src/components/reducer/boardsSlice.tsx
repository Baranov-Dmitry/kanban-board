import { createSlice } from "@reduxjs/toolkit"
import { boards } from "../../contants"
import { v4 as uuid } from 'uuid';

export const boarsdSlice = createSlice({
  name: "boards",
  initialState: {
    boards: boards
  },
  reducers: {
    addNewTask: (state, action) => {
      for (const board of state.boards) {
        if (board.title === action.payload.boardName) {
          board.tasks.push({
            id: uuid(),
            text: action.payload.text,
          })
          break
        }
      }
    },

    moveTask: (state, action) => {
      let taskToMove;

      for (const board of state.boards) {
        if (board.title === action.payload.from) {
          const index = board.tasks.findIndex(task => task.id === action.payload.id)

          if (index !== -1) {
            taskToMove = board.tasks.splice(index, 1)
          } else {
            alert('Did not find the task in database or task had been moved')
          }

          break
        }
      }

      if (taskToMove) {
        for (const board of state.boards) {
          if (board.title === action.payload.to) {
            board.tasks.push(...taskToMove)
          }
        }
      }
    }
  }
})

export const { addNewTask, moveTask } = boarsdSlice.actions

export const selectBoards = (state: any) => state.boards.value

export default boarsdSlice.reducer