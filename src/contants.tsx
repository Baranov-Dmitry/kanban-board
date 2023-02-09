import { css } from 'styled-components';

export const offsetPx = "19px";

export const hoverPointer = css`
  &:hover {
    cursor: pointer;
  }
`

export interface TaskBoard {
  title: string;
  tasks: Task[]
}

export interface Task {
  id: number,
  text: string,
  done: boolean
}

export const boards: Array<TaskBoard> = [
  {
    title: "Backlog",
    tasks: [
      {
        id: 1,
        text: "Login page – performance issues",
        done: false
      },
      {
        id: 2,
        text: "Sprint bugfix",
        done: false
      },
    ]
  },
  {
    title: "Ready",
    tasks: [
      {
        id: 3,
        text: "Shop page – performance issues",
        done: false
      },
      {
        id: 4,
        text: "Checkout bugfix",
        done: false
      },
      {
        id: 5,
        text: "Shop bug1",
        done: false
      },
    ]
  },
]