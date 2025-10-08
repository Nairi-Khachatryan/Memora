import { ThemeContext } from '../../context/theme/themeContext';
import { Class } from '../../utils/createShortClassname';
import type { AvatarType } from '../../types/avatarType';
import { getAvatars } from '../../api/avatar/getAvatar';
import { useQuery } from '@tanstack/react-query';
import { useAppSelector } from '../../app/hooks';
import { ROUTES } from '../../routes/routhPath';
import { useNavigate } from 'react-router-dom';
import { syrcleArray } from './helper';
import { useContext } from 'react';
import s from './Home.module.scss';

export const Home = () => {
  const { theme } = useContext(ThemeContext);
  const navigate = useNavigate();
  const id = useAppSelector((state) => state.user.id);

  const { data: avatars = [], isLoading: avatarLoading } = useQuery<
    AvatarType[]
  >({
    queryKey: ['avatar', id],
    queryFn: () => getAvatars(id),
    enabled: !!id,
  });

  console.log(avatars, 'avatars');
  console.log(avatarLoading, 'loading');

  return (
    <div className={Class(s, 'homeContainer', theme)}>
      <div className={s.homeHeader}>
        <h1>Family Try</h1>
      </div>

      {avatarLoading && <p>Loading Avatars...</p>}
      {!avatarLoading && avatars.length === 0 && <p>Avatars</p>}

      {/* <div className={s.tryContainer}>
        {syrcleArray.map((item, idx) => {
          return (
            <>
              {avatars[idx]?.idx == idx ? (
                <div key={idx}>{avatars[idx]?.name}</div>
              ) : (
                <div
                  key={idx}
                  className={s.avatarItem}
                  onClick={() =>
                    navigate(ROUTES.CREATE_AVATAR, { state: { idx } })
                  }
                >
                  {item}
                </div>
              )}
            </>
          );
        })}
      </div> */}

      <div className={s.tryContainer}>
        {syrcleArray.map((item, idx) => {
          // ищем аватар, у которого index совпадает с текущим idx
          const foundAvatar = avatars.find((avatar) => avatar.idx === idx);

          return foundAvatar ? (
            <div key={idx} className={s.avatarItem}>
              {foundAvatar.name}
            </div>
          ) : (
            <div
              key={idx}
              className={s.avatarItem}
              onClick={() => navigate(ROUTES.CREATE_AVATAR, { state: { idx } })}
            >
              {item}
            </div>
          );
        })}
      </div>
    </div>
  );
};
