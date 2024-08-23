import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import './styles.css';
import { App } from './App';
import { RouterProvider } from 'react-router-dom';
import { router } from './Routes/Routes';

createRoot(document.getElementById('root') as HTMLElement).render(
  // <StrictMode>
    <RouterProvider router={router} />
  // </StrictMode>
);
