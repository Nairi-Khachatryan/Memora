import { ROUTES } from '../../routes/routhPath';
import { useNavigate } from 'react-router-dom';
import s from './NotFoundPage.module.scss';
import type React from 'react';
import { Button } from 'antd';

export const NotFoundPage: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className={s.container}>
      <div>
        <h1>Oops!</h1>
        <h2>404 - Page Not Found</h2>
      </div>
      <div>
        <h3>
          The page you are looking for might have been removed had its name
          changed or is temporarily unavailable.
        </h3>
      </div>

      <div>
        <Button type="primary" onClick={() => navigate(ROUTES.HOME_PATH)}>
          Go Home
        </Button>
      </div>
    </div>
  );
};
