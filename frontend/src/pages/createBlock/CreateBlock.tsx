import { createBlock } from '../../api/createBlock';
import { useAppSelector } from '../../app/hooks';
import { useToast } from '../../hooks/useToast';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Button } from 'antd';

export const CreateBlock = () => {
  const ownerId = useAppSelector((state) => state.user.id);
  const navigate = useNavigate();
  const { showToast } = useToast();

  const [blockValue, setBlockValue] = useState({
    lable: '',
    text: '',
  });

  async function handleCreateBlock() {
    const data = await createBlock({ ...blockValue, ownerId });

    if (!data.success) {
      showToast({ type: 'error', message: data.message });
    }

    navigate(-1);
    showToast({ type: 'success', message: data.message });
  }
  return (
    <div>
      <div>
        <input
          name="lable"
          onChange={(e) =>
            setBlockValue((prev) => ({
              ...prev,
              [e.target.name]: e.target.value,
            }))
          }
          value={blockValue.lable}
          type="text"
        />
      </div>
      <div>
        <textarea
          name="text"
          onChange={(e) =>
            setBlockValue((prev) => ({
              ...prev,
              [e.target.name]: e.target.value,
            }))
          }
          value={blockValue.text}
        >
          text
        </textarea>
      </div>
      <div>
        <Button onClick={handleCreateBlock}>Create</Button>
      </div>
    </div>
  );
};
