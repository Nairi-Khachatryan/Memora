import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
export const BlockDetailInfo = () => {
  const location = useLocation();
  const [inputValue, setInputValue] = useState(location.state.block.text);

  const header = location.state.block.lable;

  return (
    <div>
      <h1>{header}</h1>
      <textarea
        onChange={(e) => setInputValue(e.target.value)}
        value={inputValue}
      ></textarea>
    </div>
  );
};
