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
      state.boards.forEach(board => {
        if (board.title === action.payload.boardName) {
          board.tasks.push({
            id: uuid(),
            text: action.payload.text,
            done: false
          })
        }
      })
    }
  }
})

export const { addNewTask } = boarsdSlice.actions

export const selectBoards = (state: any) => state.boards.value

export default boarsdSlice.reducer