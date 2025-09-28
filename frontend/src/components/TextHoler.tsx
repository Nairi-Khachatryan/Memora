import React from 'react';

interface Props {
  text: string | null;
}

export const TextHoler: React.FC<Props> = ({ text }) => {
  return (
    <div>
      <div style={{ marginRight: '10px' }}>{text}</div>
    </div>
  );
};
