import React from 'react'
import { Task } from '../../contants'
import styled from "styled-components";
import { hoverPointer } from "../../contants";

const Board = ({ text }: { text: string }) => {
  return (
    <BoardsTaskItem>
      {text}
    </BoardsTaskItem>
  )
}

export const BoardsTaskItem = styled.div`
  background-color: #ffffff;
  margin-top: 9px;
  margin-bottom: 15px;
  padding-top: 7px;
  padding-bottom: 9px;
  padding-left: 9px;
  padding-right: 6px;
  font-size: 18px;
  line-height: 21px;
  border-radius: 5px;
  word-spacing: 0.3px;

  ${hoverPointer}
`;


export default Board