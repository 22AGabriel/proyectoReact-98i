import React from 'react';
import ReactDOM from 'react-dom/client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { RouterProvider } from 'react-router-dom';

import { router } from './constants/routes.jsx';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './main.css';
import { Toaster } from 'sonner';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
    <Toaster richColors position='top-center' />
  </React.StrictMode>
);
