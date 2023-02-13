import { css } from 'styled-components';

export const offsetPx = "19px";

export const hoverPointer = css`
  &:hover {
    cursor: pointer;
    box-shadow: 0px 0px 7px 1px rgb(34 60 80 / 32%);
  }
`

export interface TaskBoard {
  title: string;
  sourceOfTasks: string | null;
  tasks: Task[];
}

export interface Task {
  id: string,
  text: string,
  done: boolean
}

export const boards: Array<TaskBoard> = [
  {
    title: "Backlog",
    sourceOfTasks: null,
    tasks: [
      {
        id: "1",
        text: "Login page – performance issues",
        done: false
      },
      {
        id: "2",
        text: "Sprint bugfix",
        done: false
      },
    ]
  },
  {
    title: "Ready",
    sourceOfTasks: "Backlog",
    tasks: [
      {
        id: "3",
        text: "Shop page – performance issues",
        done: false
      },
      {
        id: "4",
        text: "Checkout bugfix",
        done: false
      },
      {
        id: "5",
        text: "Shop bug1",
        done: false
      },
    ]
  },
]