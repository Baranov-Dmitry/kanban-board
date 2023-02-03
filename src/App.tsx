import React from 'react';
import styled from 'styled-components';
const userLogo = require('./images/user-avatar.png')
const arrowDown = require('./images/arrow-down.png')
const arrowUp = require('./images/arrow-up.png')

const offset = "16px"

const Header = styled.div`
  width: 100%;
  height: 50px;
  background-color: #0067A3;
  display: flex;
  align-items: center;
  justify-content: space-around;
`

const HeaderTitle = styled.span`
  font-family: 'Roboto';
  font-weight: 400;
  font-size: 28px;
  line-height: 33px;
  color: #FFFFFF;
  margin-left: ${offset};
`

const HeaderLogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: ${offset};
  position: relative;
`

const HeaderArrow = styled.div`
  width: 24px;
  height: 24px;
  background-image: url(${arrowDown});
`

const HeaderMenuContainer = styled.div`
  position: absolute;
  width: 134px;
  height: 60px;
  left: 195px;
  top: 61px;
  background: #FFFFFF;
  border-radius: 5px;
  &::after {
    content: "";
    position: absolute;
    width: 11px;
    height: 11px;
    background: #FFFFFF;
    top: -10px;
  }
`

const MainBlock = styled.div`
  width: 100%;
  min-height: calc(100% - 110px);
`

function App() {

  const showMenu = true;

  return (
    <>
      <Header>
        <HeaderTitle>Awesome Kanban Board</HeaderTitle>
        <HeaderLogoContainer>
          <img src={userLogo} alt="user" />
          <HeaderArrow />
          {showMenu && <HeaderMenuContainer />}
        </HeaderLogoContainer>
      </Header>
      <MainBlock>holla</MainBlock>
    </>
  );
}

export default App;
