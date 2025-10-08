import React from 'react';
import s from './AvatarItem.module.scss';
import { UserOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../routes/routhPath';

type Props = {
  label: string;
};

export const AvatarItem: React.FC<Props> = ({ label }) => {
  const navigate = useNavigate();

  function avatarMoreInfo() {
    navigate(ROUTES.AVATAR_ITEM_MORE_INFO);
  }
  return (
    <div className={s.avatarItemContainer}>
      <div onClick={avatarMoreInfo} className={s.avatarItem}>
        <UserOutlined style={{ marginBottom: 5 }} />
      </div>
      <div>
        <h3>{label}</h3>
      </div>
    </div>
  );
};
