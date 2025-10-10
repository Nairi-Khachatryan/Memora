import { AvatarItem } from '../../components/avatarItem/AvatarItem';
import { SyrcleItem } from '../../components/syrcleItem/SyrcleItem';
import { ThemeContext } from '../../context/theme/themeContext';
import { Class } from '../../utils/createShortClassname';
import type { AvatarType } from '../../types/avatarType';
import { getAvatars } from '../../api/avatar/getAvatar';
import { useQuery } from '@tanstack/react-query';
import { useAppSelector } from '../../app/hooks';
import { syrcleArray } from './helper';
import { useContext } from 'react';
import s from './Home.module.scss';

export const Home: React.FC = () => {
  const { theme } = useContext(ThemeContext);
  const id = useAppSelector((state) => state.user.id);

  const { data: avatars = [], isLoading: avatarLoading } = useQuery<
    AvatarType[]
  >({
    queryKey: ['avatar', id],
    queryFn: () => getAvatars(id),
    enabled: !!id,
  });

  return (
    <div className={Class(s, 'homeContainer', theme)}>
      <div className={s.homeHeader}>
        <h1>Family Try</h1>
      </div>

      {avatarLoading && <p>Loading Avatars...</p>}
      {!avatarLoading && avatars.length === 0 && <p>Log in to view Avatars.</p>}

      <div className={s.tryContainer}>
        {syrcleArray.map((item, idx) => {
          const foundAvatar = avatars.find((avatar) => avatar.idx === idx)
          return foundAvatar ? (
            <AvatarItem key={idx} {...foundAvatar} />
          ) : (
            <SyrcleItem key={idx} idx={idx} item={item} />
          );
        })}
      </div>
    </div>
  );
};
