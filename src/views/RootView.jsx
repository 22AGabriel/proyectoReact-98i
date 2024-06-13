import { Outlet } from 'react-router-dom';

import Header from '../components/Common/Header/Header';

const RootView = () => {
  return (
    <>
      <Header />
      <main className='container my-3'>
        <Outlet />
      </main>
      <footer>Este es el footer</footer>
    </>
  );
};
export default RootView;
