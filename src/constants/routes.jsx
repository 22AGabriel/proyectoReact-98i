import { createBrowserRouter } from 'react-router-dom';
import RootView from '../views/RootView';
import ContactsView from '../views/ContactsView';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootView />,
    children: [
      {
        path: 'contactos',
        element: <ContactsView />,
      },
    ],
  },
]);
