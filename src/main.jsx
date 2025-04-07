import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from "react-router";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"

import './index.css'
import App from './App.jsx'
import Contact from './Contact.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  
  },
  {
    path: "/contact",
    element: <Contact/>,
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
 <Analytics/>
 <SpeedInsights/>
    
    <RouterProvider router={router} />

  </StrictMode>,
)
