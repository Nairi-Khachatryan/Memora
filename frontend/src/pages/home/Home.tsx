import { LoadingCircle } from '../../components/loadingCircle/LoadingCircle';
import { AvatarItem } from '../../components/avatarItem/AvatarItem';
import { CircleItem } from '../../components/circleItem/CircleItem';
import { ThemeContext } from '../../context/theme/themeContext';
import { Class } from '../../utils/createShortClassname';
import { getAvatars } from '../../api/avatar/getAvatar';
import { useQuery } from '@tanstack/react-query';
import { useAppSelector } from '../../app/hooks';
import { ROUTES } from '../../routes/routhPath';
import type { AvatarType } from './Home.types';
import { useNavigate } from 'react-router-dom';
import { syrcleArray } from './helper';
import { useContext } from 'react';
import s from './Home.module.scss';

export const Home: React.FC = () => {
  const { theme } = useContext(ThemeContext);
  const id = useAppSelector((state) => state.user.user.id);
  const navigate = useNavigate();

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
        <h1 onClick={() => navigate(ROUTES.ABOUT_OUR_PROJECT)}>Family Try</h1>
      </div>

      <div className={s.tryContainer}>
        {syrcleArray.map((item, idx) => {
          const foundAvatar = avatars.find((avatar) => avatar.idx === idx);

          if (avatarLoading) {
            return <LoadingCircle key={idx} />;
          }

          if (foundAvatar) {
            return <AvatarItem key={idx} {...foundAvatar} />;
          }

          return <CircleItem key={idx} idx={idx} item={item} />;
        })}
      </div>
    </div>
  );
};
