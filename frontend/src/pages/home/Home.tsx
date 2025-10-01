import s from './Home.module.scss';

export const Home = () => {
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
    <div className={s.homeContainer}>
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
