import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// import App from './App.jsx'
import './index.css'

//Pages
import {HomePage} from './pages/Homepage/HomePage.jsx';
import { LoginPage } from "./pages/LoginPage.jsx";

const router = createBrowserRouter([
  {
    path:'/',
    element: < HomePage />,
    errorElement: <div>404 Not Found</div>
  },
  {
    path:'/login',
    element: < LoginPage />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={ router }/>
  </StrictMode>,
)
