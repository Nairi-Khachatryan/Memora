import { ROUTES } from '../../routes/routhPath';
import { useNavigate } from 'react-router-dom';
import type { SrcProps } from './Logo.types';
import s from './Logo.module.scss';
import React from 'react';

export const Logo: React.FC<SrcProps> = ({ src }) => {
  const navigate = useNavigate();
  return (
    <img
      src={src}
      className={s.logo}
      onClick={() => navigate(ROUTES.HOME_PATH)}
    />
  );
};
