import React from 'react';
import { Outlet, RouteObject, useRoutes } from 'react-router-dom';
import styled from 'styled-components';
import Boards from './components/Boards/Boards';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import TaskDetails from './components/TaskDetails/TaskDetails';

function App() {

  const routes: RouteObject[] = [
    {
      path: '/',
      element: (
        <Main />
      ),
      children: [
        { index: true, element: <Boards /> },
        { path: '/task/:id', element: <TaskDetails /> },
        { path: '*', element: <ErrorPage /> },
      ],
    },
  ];

  let element = useRoutes(routes);

  return (
    <>
      {element}
    </>
  );
}

function Main() {
  return (
    <>
      <Header />
      <MainContentWrap>
        <Outlet />
      </MainContentWrap>
      <Footer />
    </>
  )
}

const MainContentWrap = styled.div`
  width: 100%;
  min-height: calc(100vh - 110px);
  background-color: #0079bf;
  padding-top: 20px;
  padding-right: 19px;
  padding-left: 19px;
  padding-bottom: 20px;
  box-sizing: border-box;

  @media (max-width: 700px) {
    min-height: calc(100vh - 55px);
  }
`

export default App;
