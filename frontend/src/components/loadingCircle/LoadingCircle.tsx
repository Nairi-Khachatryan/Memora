import s from './LoadingCircle.module.scss';
import { Spin } from 'antd';

export const LoadingCircle = () => {
  return (
    <div className={s.circleContainer}>
      <Spin />
    </div>
  );
};
