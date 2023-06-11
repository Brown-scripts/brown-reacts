import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './App.css';
import "./myStyles.css"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import reportWebVitals from './reportWebVitals';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import StudentInfo from './pages/StudentInfo';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "login/",
    element: <Login />,
  },
  {
    path: "register/",
    element: <Signup />,
  },
  {
    path: "dashboard/",
    element: <Dashboard />,
  },
  {
    path: "student-info/",
    element: <StudentInfo />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
       <RouterProvider router={router} />
</React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
