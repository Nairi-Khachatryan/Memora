import React from 'react';
import s from './Syrcle.module.scss';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../routes/routhPath';

type Props = {
  item: string;
  idx: number;
};

export const SyrcleItem: React.FC<Props> = ({ item, idx }) => {
  const navigate = useNavigate();
  return (
    <div
      className={s.syrcleItem}
      onClick={() => navigate(ROUTES.CREATE_AVATAR, { state: { idx } })}
    >
      {item}
    </div>
  );
};
