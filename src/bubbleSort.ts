import update from './update';
import swap from './swap';

export default async (arr: number[], delay?: boolean): Promise<number[]> => {
  const length = arr.length;
  if (arr.length === 0) return arr;
  for (let i = 0; i < length; i++) {
    let swapped = false;
    for (let j = 0; j < length - i; j++) {
      if (arr[j] > arr[j + 1]) {
        if (window.isForceStopped) break;
        swap(arr, j + 1, j);
        if (delay) await update(arr, 0);
        swapped = true;
      }
    }
    if (!swapped) return arr;
  }
  return arr;
};
