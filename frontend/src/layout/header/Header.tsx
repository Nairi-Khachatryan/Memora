import { removeUser } from '../../features/user/userSlice';
import logoLight from '../../assets/logo-light2.png';
import { useAppDispatch } from '../../app/hooks';
import { ROUTES } from '../../routes/routhPath';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import s from './Header.module.scss';
import { Button } from 'antd';

export const Header = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const isAuth = useAuth();
  return (
    <header>
      <div>
        <img
          onClick={() => navigate(ROUTES.HOME_PATH)}
          className={s.logo}
          src={logoLight}
          alt="logo"
        />
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
