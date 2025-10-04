import { ThemeContext } from '../../context/theme/themeContext';
import { Class } from '../../utils/createShortClassname';
import { useContext } from 'react';
import s from './Home.module.scss';
import { ROUTES } from '../../routes/routhPath';
import { useNavigate } from 'react-router-dom';

export const Home = () => {
  const { theme } = useContext(ThemeContext);
  const navigate = useNavigate();
  const syrcleArray = [
    '+',
    '+',
    '+',
    '+',
    '+',
    '+',
    '+',
    '+',
    '+',
    '+',
    '+',
    '+',
    '+',
    '+',
    '+',
    '+',
    '+',
    '+',
    '+',
    '+',
    '+',
    '+',
    '+',
    '+',
    '+',
    '+',
    '+',
  ];

  return (
    <div className={Class(s, 'homeContainer', theme)}>
      <div className={s.homeHeader}>
        <h1>Family Try</h1>
      </div>
      <div className={s.tryContainer}>
        {syrcleArray.map((item, idx) => (
          <div
            onClick={() => navigate(ROUTES.CREATE_AVATAR)}
            key={idx}
            className={s.avatarItem}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};
