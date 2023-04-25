import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import Test from './components/Test/Test';
import TodoList from './components/TodoList/TodoList';
import DashBoard from './components/DashBoard/DashBoard';
import Layout from './components/Layout/Layout';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route path='dashboard' element={<DashBoard/>}/>
      <Route path='todo' element={<TodoList/>}/>
      <Route path='test' element={<Test/>}>
        <Route path=':id' element={<Test/>}/>
      </Route>
    </Route>
  )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
