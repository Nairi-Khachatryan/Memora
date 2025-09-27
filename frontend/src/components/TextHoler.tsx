import React from 'react';

interface Props {
  text: string;
}

export const TextHoler: React.FC<Props> = ({ text }) => {
  return (
    <div>
      <div>{text}</div>
    </div>
  );
};
