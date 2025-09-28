import React from 'react';
import { TextHoler } from './TextHoler';
import { IoCopyOutline } from 'react-icons/io5';

interface Props {
  text: string;
  className: string;
}

export const ProfileItem: React.FC<Props> = ({ text, className }) => {
  return (
    <span className={className}>
      <TextHoler text={text} />
      <IoCopyOutline  />
    </span>
  );
};
