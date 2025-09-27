import { removeUser } from '../../features/user/userSlice';
import { useAppDispatch } from '../../app/hooks';
import { ROUTES } from '../../routes/routhPath';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import './Header.module.scss';
import { Button } from 'antd';

export const Header = () => {
  const dispatch = useAppDispatch();
  const isAuth = useAuth();
  const navigate = useNavigate();
  return (
    <header>
      <div>logo</div>
      <div>
        {isAuth ? (
          <>
            <Button onClick={() => navigate(ROUTES.PROFILE)}>Profile</Button>
            <Button onClick={() => dispatch(removeUser())}>Log Out</Button>
          </>
        ) : (
          <>
            <Button onClick={() => navigate(ROUTES.SIGN_IN)}>Sign In</Button>
            <Button onClick={() => navigate(ROUTES.SIGN_UP)}>Sign Up</Button>
          </>
        )}
      </div>
    </header>
  );
};
