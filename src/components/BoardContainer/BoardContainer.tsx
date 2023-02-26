import React from 'react'
import { Link } from 'react-router-dom';
import styled from "styled-components";
import { hoverPointer, TaskBoard } from "../../contants"
import AddTask from '../AddTask/AddTask';

interface Props extends TaskBoard {
  title: string
}

const BoardContainer = ({ title, sourceOfTasks, tasks }: Props) => {

  console.log("Render BoardContainer, = ", title)

  return (
    <BoardsTaskContainer>
      <BoardsTaskTitle>
        {title}
      </BoardsTaskTitle>
      {tasks.map(task => (
        <Board key={task.id} >
          <LinkStyled to={"/task/" + task.id}>{task.text}</LinkStyled>
        </Board>
      ))
      }
      <AddTask boardName={title} sourceOfTasks={sourceOfTasks}></AddTask>
    </BoardsTaskContainer >
  )
}

const LinkStyled = styled(Link)`
  text-decoration: none;
  color: #000;
  word-wrap: break-word;
`

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

const Board = styled.div`
  background-color: #ffffff;
  margin-top: 9px;
  margin-bottom: 15px;
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 9px;
  padding-right: 6px;
  font-size: 18px;
  line-height: 21px;
  border-radius: 5px;
  word-spacing: 0.3px;
  
  ${hoverPointer}
`;

export default React.memo(BoardContainer)