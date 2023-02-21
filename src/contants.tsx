import { css } from 'styled-components';
// import { v4 as uuid } from 'uuid';

export const offsetPx = "19px";

export const idForLocalStorage = "Konban-Board-2023"

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
  desctiption: string,
}

export const emptyBoards: Array<TaskBoard> = [
  {
    title: "Backlog",
    sourceOfTasks: null,
    tasks: []
  },
  {
    title: "Ready",
    sourceOfTasks: "Backlog",
    tasks: []
  },
  {
    title: "In Progress",
    sourceOfTasks: "Ready",
    tasks: []
  },
  {
    title: "Finished",
    sourceOfTasks: "In Progress",
    tasks: [],
  },

]

// export const boards: Array<TaskBoard> = [
//   {
//     title: "Backlog",
//     sourceOfTasks: null,
//     tasks: [
//       {
//         id: uuid(),
//         text: "Login page – performance issues",
//         desctiption: "",
//       },
//       {
//         id: uuid(),
//         text: "Sprint bugfix",
//         desctiption: "",
//       },
//     ]
//   },
//   {
//     title: "Ready",
//     sourceOfTasks: "Backlog",
//     tasks: [
//       {
//         id: uuid(),
//         text: "Shop page – performance issues",
//         desctiption: "",
//       },
//       {
//         id: uuid(),
//         text: "Checkout bugfix",
//         desctiption: "",
//       },
//       {
//         id: uuid(),
//         text: "Shop bug1",
//         desctiption: "",
//       },
//     ]
//   },
//   {
//     title: "In Progress",
//     sourceOfTasks: "Ready",
//     tasks: [
//       {
//         id: uuid(),
//         text: "User page – performance issues",
//         desctiption: "",
//       },
//       {
//         id: uuid(),
//         text: "Auth bugfix",
//         desctiption: "",
//       },
//     ]
//   },
//   {
//     title: "Finished",
//     sourceOfTasks: "In Progress",
//     tasks: [
//       {
//         id: uuid(),
//         text: "Main page – performance issues",
//         desctiption: "",
//       },
//       {
//         id: uuid(),
//         text: "Main page bugfix",
//         desctiption: "",
//       },
//     ],
//   },

// ]