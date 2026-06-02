import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router/dom';

import { router } from './Routes/Routes';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import BookProvider from './context';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BookProvider>
      <RouterProvider router={router} />
      <ToastContainer />
    </BookProvider>

  </StrictMode>,
)