import { ROUTES } from '../../routes/routhPath';
import { useNavigate } from 'react-router-dom';
import type { Props } from './Circle.types';
import s from './Circle.module.scss';
import React from 'react';

export const CircleItem: React.FC<Props> = ({ item, idx }) => {
  const navigate = useNavigate();
  return (
    <div
      draggable
      className={s.syrcleItem}
      onClick={() => navigate(ROUTES.CREATE_AVATAR, { state: { idx } })}
    >
      {item}
    </div>
  );
};
