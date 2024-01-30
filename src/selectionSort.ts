import update from './update';
import swap from './swap';

export default async (arr: number[], delay?: boolean): Promise<number[]> => {
  for (let i = 0; i < arr.length - 1; i++) {
    if (window.isForceStopped) break;
    let min = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (window.isForceStopped) break;
      if (arr[j] < arr[min]) min = j;
    }

    if (min !== i) swap(arr, min, i);
    if (delay) await update(arr, 40);
  }
  return arr;
};
