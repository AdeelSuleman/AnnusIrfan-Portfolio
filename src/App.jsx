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

  const [isLicensed, setIsLicensed] = useState(true);
  const [message, setMessage] = useState("");

  useEffect(() => {
  const checkLicense = async () => {
    try {
      const res = await fetch(
        "https://raw.githubusercontent.com/AdeelSuleman/AnnaPorfolio-License/main/license.json",
        { cache: "no-store" }
      );
      const data = await res.json();
      setIsLicensed(Boolean(data.active));
      setMessage(data.message || "");
    } catch (error) {
      console.error("License check failed:", error);
      setIsLicensed(false);
      setMessage("License verification failed.");
    }
  };

  checkLicense();
}, []);

  if (!isLicensed) {
    return(
      <div className='w-full h-screen flex items-center justify-center bg-gray-900 text-white flex-col gap-2'>
        <h1 className='text-2xl font-bold'>⚠ Site Block</h1>
        <p>{message}</p>
      </div>
    );
  }

  return (
    <>
      <RouterProvider router={router}/>
      <ScrollToTop/>
    </>
  )
}

export default App
