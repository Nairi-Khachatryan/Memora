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

  // console.log(syrcleArray.length);

  return (
    <div className={s.homeContainer}>
      <div className={s.homeHeader}>
        <h1>Hire Will Be Your Family Try</h1>
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
