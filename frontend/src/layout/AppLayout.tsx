import { Footer } from './footer/Footer';
import { Header } from './header/Header';
import { Outlet } from 'react-router-dom';
import './AppLayout.moudule.scss'

export const AppLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
