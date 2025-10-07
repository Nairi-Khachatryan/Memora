import { ThemeContext } from '../../context/theme/themeContext';
import { removeUser } from '../../features/user/userSlice';
import logoLight from '../../assets/logo-light2.png';
import logoDark from '../../assets/logo-dark.png';
import { Logo } from '../../components/logo/Logo';
import { useAppDispatch } from '../../app/hooks';
import { ROUTES } from '../../routes/routhPath';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { useContext } from 'react';
import './Header.module.scss';
import { Button } from 'antd';

export const Header = () => {
  const isAuth = useAuth();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { theme } = useContext(ThemeContext);

  return (
    <header>
      <div>
        {theme === 'light' ? <Logo src={logoLight} /> : <Logo src={logoDark} />}
      </div>
      <div>
        {isAuth ? (
          <>
            <Button
              style={{ marginRight: 9 }}
              onClick={() => navigate(ROUTES.PROFILE)}
            >
              Profile
            </Button>
            <Button onClick={() => dispatch(removeUser())}>Log Out</Button>
          </>
        ) : (
          <>
            <Button
              style={{ marginRight: 9 }}
              onClick={() => navigate(ROUTES.SIGN_IN)}
            >
              Sign In
            </Button>
            <Button onClick={() => navigate(ROUTES.SIGN_UP)}>Sign Up</Button>
          </>
        )}
      </div>
    </header>
  );
};
