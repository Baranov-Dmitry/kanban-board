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
  display: flex;
  align-items: flex-start;
  align-content: flex-start;
  flex-wrap: wrap;
  display: flex;
  gap: 24px;
  box-sizing: border-box;
`;

export default Boards