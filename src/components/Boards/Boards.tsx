import React from 'react'
import styled from "styled-components";
import BoardContainer from '../BoardContainer/BoardContainer';
import { useSelector } from 'react-redux/es/exports';

const Boards = () => {

  const boards = useSelector((state: BoardsState) => state.boardsStore.boards)

  return (
    <BoardsContainer>
      {boards.map(board => (
        <BoardContainer key={board.title} {...board} />
      ))}
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