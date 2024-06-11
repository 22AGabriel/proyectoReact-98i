import { Outlet } from 'react-router-dom';

const RootView = () => {
  return (
    <>
      <header>Este es el header</header>
      <main className='container'>
        <Outlet />
      </main>
      <footer>Este es el footer</footer>
    </>
  );
};
export default RootView;
