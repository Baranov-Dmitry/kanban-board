import React from 'react'
import styled from "styled-components";
import { offsetPx } from '../../contants'

const Footer = () => {
  return (
    <FooterContainer>
      <FlexContainer>
        <span>Active tasks: &lt;N&gt;</span>
        <SpanOffsetX2>Finished tasks: &lt;M&gt;</SpanOffsetX2>
      </FlexContainer>
      <span>Kanban board by &lt;NAME&gt;, &lt;YEAR&gt;</span>
    </FooterContainer>
  )
}

export const FooterContainer = styled.div`
  width: calc(100% - ${offsetPx} * 2);
  height: 55px;
  background-color: #0067a3;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: ${offsetPx};
  padding-right: ${offsetPx};
  color: #fff;
  @media (max-width: 700px) {
    display: none;
  }
`;

export const FlexContainer = styled.div`
  display: flex;
`;

export const SpanOffsetX2 = styled.div`
  margin-left: calc(${offsetPx} * 2);
  margin-right: calc(${offsetPx} * 2);
`;

export default Footer