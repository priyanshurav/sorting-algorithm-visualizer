import { shuffle } from 'lodash';
import update from './update';

function isSorted(arr: number[]): boolean {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i + 1]) return false;
  }
  return true;
}

export default async (arr: number[], delay?: boolean): Promise<number[]> => {
  if (isSorted(arr)) return arr;
  while (!isSorted(arr) && !window.isForceStopped) {
    arr = shuffle(arr);
    if (delay) await update(arr, 0);
    if (isSorted(arr)) return arr;
  }
  return arr;
};
