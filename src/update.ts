import renderBars from './renderBars';

export default async (arr: number[], delay: number): Promise<void> => {
  await new Promise<void>((resolve) => setTimeout(resolve, delay));
  renderBars(arr);
};
