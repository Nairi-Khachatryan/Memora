import React from 'react';
import s from './AvatarItem.module.scss';
import { UserOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../routes/routhPath';
import type { AvatarType } from '../../types/avatarType';

export const AvatarItem: React.FC<AvatarType> = (foundAvatar) => {
  const navigate = useNavigate();

  const { name } = foundAvatar;

  function avatarMoreInfo() {
    navigate(ROUTES.AVATAR_ITEM_MORE_INFO, { state: { foundAvatar } });
  }
  return (
    <div className={s.avatarItemContainer}>
      <div onClick={avatarMoreInfo} className={s.avatarItem}>
        <UserOutlined />
      </div>
      <div>
        <h3>{name}</h3>
      </div>
    </div>
  );
};
