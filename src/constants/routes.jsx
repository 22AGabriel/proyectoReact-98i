import { createBrowserRouter } from 'react-router-dom';
import RootView from '../views/RootView';
import ContactsView from '../views/ContactsView';
import HomeView from '../views/HomeView';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootView />,
    // errorElement: <ErrorPage />,
    children: [
      {
        path: '',
        element: <HomeView />,
      },
      {
        path: 'contactos',
        element: <ContactsView />,
      },
    ],
  },
]);
