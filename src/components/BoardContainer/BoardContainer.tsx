import React from 'react'
import styled from "styled-components";
import { Task, TaskBoard } from "../../contants"
import AddTask from '../AddTask/AddTask';
import Board from '../Board/Board';

const BoardContainer = ({ title, sourceOfTasks, tasks, sourseTaskBoard }: any) => {
  console.log(title, sourceOfTasks, sourseTaskBoard)
  return (
    <BoardsTaskContainer key={title}>
      <BoardsTaskTitle>
        {title}
      </BoardsTaskTitle>
      {(tasks as Task[]).map(task => (
        <Board key={task.id} text={task.text} />
      ))}
      <AddTask>{sourseTaskBoard}</AddTask>
    </BoardsTaskContainer>
  )
}

const BoardsTaskContainer = styled.div`
  width: 282px;
  padding: 13px 11px 8px 11px;
  background-color: #ebecf0;
  box-sizing: border-box;
  border-radius: 10px;
`;

const BoardsTaskTitle = styled.div`
  font-size: 18px;
  font-family: "Roboto";
  font-style: normal;
  margin-bottom: 9px;
`;

export default BoardContainer