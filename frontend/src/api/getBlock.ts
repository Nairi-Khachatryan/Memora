type BlockType = {
  _id: string;
  lable: string;
  text: string;
  ownerId: string;
};

export const getBlock = async (id: string): Promise<BlockType[]> => {
  const res = await fetch(`http://localhost:5051/user/getBlock/${id}`, {
    method: 'GET',
  });

  const json = await res.json();
  return json.data;
};
