import { createBrowserRouter } from 'react-router-dom';

import RootView from '../views/RootView';
import ContactsView from '../views/ContactsView';
import UsersView from '../views/UsersView';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootView />,
    children: [
      {
        path: 'contactos',
        element: <ContactsView />,
      },
      {
        path: 'usuarios',
        element: <UsersView />,
      },
    ],
  },
]);
