import React, { useState } from 'react'
import { boards as boardsSchema, TaskBoard } from "../../contants"
import styled from "styled-components";
import BoardContainer from '../BoardContainer/BoardContainer';

const Boards = () => {

  const [boards, setBoards] = useState<Array<TaskBoard>>(boardsSchema)

  return (
    <BoardsContainer>
      {boards ? boards.map(board => {
        console.log(board);
        if (board.sourceOfTasks !== null) {
          return <BoardContainer key={board.title} sourceOfTasks={board.sourceOfTasks} title={board.title} tasks={board.tasks}
            sourseTaskBoard={boards.filter(item => item.sourceOfTasks === board.sourceOfTasks)} />
        } else {
          return <BoardContainer key={board.title} sourceOfTasks={board.sourceOfTasks} title={board.title} tasks={board.tasks} />
        }
      }) : null}
    </BoardsContainer>
  )
}

export const BoardsContainer = styled.div`
  width: 100%;
  min-height: calc(100vh - 110px);
  background-color: #0079bf;
  padding-top: 20px;
  display: flex;
  align-items: flex-start;
  align-content: flex-start;
  padding-right: 19px;
  padding-left: 19px;
  display: flex;
  gap: 24px;
  box-sizing: border-box;

  @media (max-width: 700px) {
    min-height: calc(100vh - 55px);
  }
`;

export default Boards