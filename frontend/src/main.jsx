import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {RouterProvider, createBrowserRouter} from "react-router-dom" 
import Dashboard from '../pages/Dashboard.jsx'
import Signup from '../pages/Signup.jsx'
import Login from '../pages/Login.jsx'
import SendMoney from '../pages/SendMoney.jsx'
import { AuthProvider } from '../store/AuthContext.jsx'
import AuthenticatedRoute from './components/AuthenticateRoute.jsx'
import Landing from '../pages/Landing.jsx'

const router = createBrowserRouter([
  {
    path : "/",
    element : <Landing/>
  },
  {
    path : "/dashboard",
    element : (
      <AuthenticatedRoute>
        <Dashboard/>
      </AuthenticatedRoute>
    )
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
    element : (
      <AuthenticatedRoute>
        <SendMoney/>
      </AuthenticatedRoute>
    )
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>,
)
