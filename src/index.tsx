import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import GlobalStyle from './styledGlobal';
import { configureStore } from '@reduxjs/toolkit';
import boardsSlice from './components/reducer/boardsSlice';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

const store = configureStore({
  reducer: {
    boardsStore: boardsSlice,
  },
});

// We can use RootState type in every file in project
declare global {
  type BoardsState = ReturnType<typeof store.getState>
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <GlobalStyle />
      <App />
    </BrowserRouter>
  </Provider>
);
