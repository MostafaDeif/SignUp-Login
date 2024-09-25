import React from 'react'
import SignUp from './SignUp/SignUp'
import Login from './Login/Login'
import { RouterProvider ,createBrowserRouter } from 'react-router-dom'

export default function App() {
  const route = createBrowserRouter([
    {
      path:"/",
      element: <SignUp />,
    }
  ])
  return (
    <div className='App'>
      <RouterProvider router={route}></RouterProvider>
    </div>
  )
}
