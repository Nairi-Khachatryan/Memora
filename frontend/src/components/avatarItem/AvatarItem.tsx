import { ThemeContext } from '../../context/theme/themeContext';
import type { AvatarType } from '../../types/avatarType';
import { Class } from '../../utils/createShortClassname';
import { UserOutlined } from '@ant-design/icons';
import { ROUTES } from '../../routes/routhPath';
import { useNavigate } from 'react-router-dom';
import s from './AvatarItem.module.scss';
import React, { useContext } from 'react';

export const AvatarItem: React.FC<AvatarType> = (foundAvatar) => {
  const navigate = useNavigate();
  const { name } = foundAvatar;
  const { theme } = useContext(ThemeContext);

  function avatarMoreInfo() {
    navigate(ROUTES.AVATAR_ITEM_MORE_INFO, { state: { foundAvatar } });
  }

  return (
    <div className={s.avatarItemContainer}>
      <div onClick={avatarMoreInfo} className={Class(s, 'avatarItem', theme)}>
        <UserOutlined style={{ color: theme === 'dark' ? 'white' : 'black' }} />
      </div>
      <div>
        <h3 className={Class(s, 'nameTag', theme)}>{name}</h3>
      </div>
    </div>
  );
};
