import { ThemeContext } from '../../context/theme/themeContext';
import { Class } from '../../utils/createShortClassname';
import { useContext } from 'react';
import s from './Home.module.scss';

export const Home = () => {
  const { theme } = useContext(ThemeContext);
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
          <div key={idx} className={s.avatarItem}>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};
