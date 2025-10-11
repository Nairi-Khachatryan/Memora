import React from 'react';
import { Spin } from 'antd';
import s from './LoadingCircle.module.scss';

export const LoadingCircle = () => {
  return (
    <div className={s.circleContainer}>
      <Spin />
    </div>
  );
};
