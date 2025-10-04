import { ThemeContext } from '../context/theme/themeContext';
import { Class } from '../utils/createShortClassname';
import { Outlet } from 'react-router-dom';
import { Footer } from './footer/Footer';
import { Header } from './header/Header';
import s from './AppLayout.module.scss';
import { useContext } from 'react';

export const AppLayout = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <Header />
      <main className={Class(s, 'main', theme)}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
