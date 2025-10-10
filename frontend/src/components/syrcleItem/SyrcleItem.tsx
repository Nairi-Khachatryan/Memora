import { ROUTES } from '../../routes/routhPath';
import { useNavigate } from 'react-router-dom';
import s from './Syrcle.module.scss';
import React from 'react';

type Props = {
  item: string;
  idx: number;
};

export const SyrcleItem: React.FC<Props> = ({ item, idx }) => {
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
