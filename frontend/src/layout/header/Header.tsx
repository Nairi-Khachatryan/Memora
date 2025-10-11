import { ThemeContext } from '../../context/theme/themeContext';
import { removeUser } from '../../features/user/userSlice';
import logoLight from '../../assets/logo-light2.png';
import { Button, Popconfirm, message } from 'antd';
import { Logo } from '../../components/logo/Logo';
import logoDark from '../../assets/logo-dark.png';
import { useAppDispatch } from '../../app/hooks';
import { ROUTES } from '../../routes/routhPath';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { useContext } from 'react';
import './Header.module.scss';

export const Header = () => {
  const isAuth = useAuth();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { theme } = useContext(ThemeContext);

  function confirmLogout() {
    message.success('Log out');
    dispatch(removeUser());
  }

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
            <Popconfirm
              title="Are you sure you want to log out?"
              onConfirm={confirmLogout}
              okText="Yes"
              cancelText="No"
            >
              <Button>Log Out</Button>
            </Popconfirm>
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
