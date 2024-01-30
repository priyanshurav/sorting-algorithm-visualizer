import swap from './swap';
import update from './update';

export default async (arr: number[], delay?: boolean): Promise<number[]> => {
  let i = 1;
  while (i < arr.length) {
    let j = i;
    while (j > 0 && arr[j - 1] > arr[j]) {
      if (window.isForceStopped) break;
      swap(arr, j - 1, j);
      if (delay) await update(arr, 0);
      j--;
    }
    i++;
  }
  return arr;
};
