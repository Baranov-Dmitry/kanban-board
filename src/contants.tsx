import { css } from 'styled-components';
import { v4 as uuid } from 'uuid';

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
}

export const boards: Array<TaskBoard> = [
  {
    title: "Backlog",
    sourceOfTasks: null,
    tasks: [
      {
        id: uuid(),
        text: "Login page – performance issues",
      },
      {
        id: uuid(),
        text: "Sprint bugfix",
      },
    ]
  },
  {
    title: "Ready",
    sourceOfTasks: "Backlog",
    tasks: [
      {
        id: uuid(),
        text: "Shop page – performance issues",
      },
      {
        id: uuid(),
        text: "Checkout bugfix",
      },
      {
        id: uuid(),
        text: "Shop bug1",
      },
    ]
  },
  {
    title: "In Progress",
    sourceOfTasks: "Ready",
    tasks: [
      {
        id: uuid(),
        text: "User page – performance issues",
      },
      {
        id: uuid(),
        text: "Auth bugfix",
      },
    ]
  },
  {
    title: "Finished",
    sourceOfTasks: "In Progress",
    tasks: [
      {
        id: uuid(),
        text: "Main page – performance issues",
      },
      {
        id: uuid(),
        text: "Main page bugfix",
      },
    ],
  },

]