import React from 'react'
import styled from "styled-components";
import { TaskBoard } from "../../contants"
import { hoverPointer } from "../../contants";
import AddTask from '../AddTask/AddTask';
import Board from '../Board/Board';

const BoardContainer = ({ title, tasks }: TaskBoard) => {
  return (
    <BoardsTaskContainer key={title}>
      <BoardsTaskTitle>
        {title}
      </BoardsTaskTitle>
      {tasks.map(task => (
        <Board id={task.id} text={task.text} done={task.done} />
      ))}
      <AddTask />
      <BoardsTaskButton>Add card</BoardsTaskButton>
    </BoardsTaskContainer>
  )
}

export const BoardsTaskContainer = styled.div`
  width: 282px;
  padding: 13px 11px 8px 11px;
  background-color: #ebecf0;
  box-sizing: border-box;
  border-radius: 10px;
`;

export const BoardsTaskTitle = styled.div`
  font-size: 18px;
  font-family: "Roboto";
  font-style: normal;
  margin-bottom: 9px;
`;

export const BoardsTaskButton = styled.div`
  font-family: "Roboto";
  font-size: 18px;
  color: #5e6c84;
  position: relative;
  margin-left: 20px;

  &:before {
    content: "+";
    font-size: 28px;
    color: #5e6c84;
    position: absolute;
    top: -7px;
    left: -18px;
  }

  ${hoverPointer}
`;

export default BoardContainer