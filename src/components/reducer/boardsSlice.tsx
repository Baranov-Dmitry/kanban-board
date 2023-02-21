import { createSlice } from "@reduxjs/toolkit"
import { idForLocalStorage, emptyBoards, TaskBoard } from "../../contants"
import { v4 as uuid } from 'uuid';

export const boarsdSlice = createSlice({
  name: "boards",
  initialState: {
    boards: getFromLocalStorage(idForLocalStorage) ?? emptyBoards
  },
  reducers: {
    addNewTask: (state, action) => {
      for (const board of state.boards) {
        if (board.title === action.payload.boardName) {
          board.tasks.push({
            id: uuid(),
            text: action.payload.text,
            desctiption: "",
          })
          saveLocalStorage(idForLocalStorage, JSON.stringify(state.boards))
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

        saveLocalStorage(idForLocalStorage, JSON.stringify(state.boards))
      } else {
        alert('Did not find the task in database or task had been moved')
      }
    },

    editDiscription: (state, action) => {

      for (const board of state.boards) {
        for (const task of board.tasks) {
          if (task.id === action.payload.id) {
            task.desctiption = action.payload.desctiption
          }
        }
      }

      saveLocalStorage(idForLocalStorage, JSON.stringify(state.boards))
    }

  }
})

function saveLocalStorage(id: string, data: string) {
  localStorage.setItem(id, data);
}

function getFromLocalStorage(id: string) {
  const data = localStorage.getItem(id);
  if (!data) {
    return undefined;
  }

  return JSON.parse(data) as TaskBoard[]
}

export const { addNewTask, moveTask, editDiscription } = boarsdSlice.actions

export const selectBoards = (state: any) => state.boards.value

export default boarsdSlice.reducer