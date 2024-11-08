import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {RouterProvider, createBrowserRouter} from "react-router-dom" 
import Dashboard from '../pages/Dashboard.jsx'
import Signup from '../pages/Signup.jsx'
import Login from '../pages/Login.jsx'
import SendMoney from '../pages/SendMoney.jsx'

const router = createBrowserRouter([
  {
    path : "/",
    element : <App/>
  },
  {
    path : "/dashboard",
    element : <Dashboard/>
  },
  {
    path : "/login",
    element : <Login/>
  },
  {
    path : "/signup",
    element : <Signup/>
  },
  {
    path : "/transfer",
    element : <SendMoney/>
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
