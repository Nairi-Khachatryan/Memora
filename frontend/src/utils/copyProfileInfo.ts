export const copyProfInfo = async (text: string | undefined) => {
  if (!text) {
    return;
  }
  return await navigator.clipboard.writeText(text);
};
