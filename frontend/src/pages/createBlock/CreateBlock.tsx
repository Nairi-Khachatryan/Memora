import { Button } from 'antd';
import React from 'react';
import { createBlock } from '../../api/createBlock';
import { useAppSelector } from '../../app/hooks';

export const CreateBlock = () => {
  const ownerId = useAppSelector((state) => state.user.id);

  // const reqParams = {
  //   lable: 'lable',
  //   text: 'text',
  //   ownerId,
  // };

  function handleCreateBlock() {
    console.log('aaa')
    createBlock({ lable: 'lable', text: 'text', ownerId });
  }
  return (
    <div>
      <div>
        <input type="text" />
      </div>
      <div>
        <textarea>text</textarea>
      </div>
      <div>
        <Button onClick={handleCreateBlock}>Create</Button>
      </div>
    </div>
  );
};
