import { useEffect, useState } from 'react'
import './index.css'
import Home from './AppLayout/Home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { services } from './Data/ServiceData'
import Services from './AppLayout/Services'
import Preview from './AppLayout/Preview'
import ScrollToTop from './Components/ScrollToTop'

function App() {

  // Data store to localStorage
  useEffect(() => {
    // agar pehle se data store nahi hai to hi save karo
    if (!localStorage.getItem("servicesData")) {
      localStorage.setItem("servicesData", JSON.stringify(services));
    }
  }, []);

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home/>
    },
    {
      path: '/projects',
      element: <Services/>,
    },
    {
      path: '/preview',
      element: <Preview/>,
    }
  ])

  return (
    <>
      <RouterProvider router={router}/>
      <ScrollToTop/>
    </>
  )
}

export default App
