import React, { useEffect, useRef, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom';
import styled from "styled-components";
import { offsetPx } from "../../contants";
const arrowDown = require("../../images/arrow-down.png");
const arrowUp = require("../../images/arrow-up.png");
const userLogo = require('../../images/user-avatar.png')

const Header = () => {

  console.log("header")

  const location = useLocation()
  const [showMenu, setShowMenu] = useState({
    changing: false,
    show: false
  });

  const popUpMenu = useRef<HTMLDivElement>(null)

  const animate = (startTime: number) => {
    if (popUpMenu.current === null) return

    const top = popUpMenu.current.offsetTop

    const showing = top <= 64 && showMenu.show === false && showMenu.changing === true ? true : false
    const hiding = top >= -15 && showMenu.show === true && showMenu.changing === true ? true : false

    if (showing === false && hiding === false) {
      if (showMenu.changing === true) {
        setShowMenu(prev => ({ show: !prev.show, changing: !prev.changing }))
      }
      return
    }

    if (showing) {
      popUpMenu.current.style.top = (top + 10) + 'px';
    } else {
      popUpMenu.current.style.top = (top - 10) + 'px';
    }

    requestAnimationFrame(animate)
  }

  useEffect(() => {
    requestAnimationFrame(animate)
  }, [showMenu.changing])

  return (
    <HeaderContanier>
      <HeaderTitle style={location.pathname === "/" ? { pointerEvents: "none" } : undefined} to="/">Awesome Kanban Board</HeaderTitle>
      <HeaderLogoContainer>
        <HeaderBlueBG>
          <ContanerForClick onClick={() => setShowMenu(prev => ({ ...prev, changing: !prev.changing }))}>
            <img src={userLogo} alt="user" />
            <img src={(showMenu.show || showMenu.changing) ? arrowUp : arrowDown} alt="arrow" />
          </ContanerForClick>
        </HeaderBlueBG>
        {(showMenu.show || showMenu.changing) &&
          <HeaderMenuContainer ref={popUpMenu}>
            <HeaderMenuItem>Profile</HeaderMenuItem>
            <HeaderMenuItem>Log Out</HeaderMenuItem>
          </HeaderMenuContainer>
        }
      </HeaderLogoContainer>
    </HeaderContanier>
  )
}

const ContanerForClick = styled.div`
  display: flex;
  align-items: center;

  &:hover {
    cursor: pointer;
  }
`

const HeaderContanier = styled.div`
  width: 100%;
  height: 55px;
  background-color: #0067a3;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 400px) {
    justify-content: flex-end;
  }
`;

const HeaderTitle = styled(NavLink)`
  text-decoration: none;
  font-family: "Roboto";
  font-weight: 400;
  font-size: 28px;
  line-height: 33px;
  color: #ffffff;
  margin-left: ${offsetPx};
  @media (max-width: 700px) {
    /* display: none; */
    font-size: 18px;
  }
  @media (max-width: 400px) {
    display: none;
  }
`;

const HeaderLogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: ${offsetPx};
  position: relative;
`;

// const HeaderArrow = styled.div`
//   width: 24px;
//   height: 24px;
//   background-image: url(${arrowDown});
// `;

const HeaderMenuContainer = styled.div`
  position: absolute;
  width: 134px;
  height: 60px;
  right: 0px;
  top: -15px;
  z-index: 1;
  background: #fff;
  border-radius: 5px;
  &::after {
    content: "";
    content: "";
    position: absolute;
    width: 11px;
    height: 11px;
    background: #fff;
    top: -5px;
    right: 39px;
    transform: rotate(45deg);
  }
`;

const HeaderBlueBG = styled.div`
  width: 150px;
  height: 55px;
  background-color: #0067a3;
  display: flex;
  align-items: center;
  justify-content: end;
  position: relative;
  z-index: 2;
`

const HeaderMenuItem = styled.div`
  margin-top: 5px;
  margin-left: 8px;
`;


export default Header