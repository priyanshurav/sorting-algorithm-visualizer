import update from './update';
import swap from './swap';

export default async (arr: number[], delay?: boolean): Promise<number[]> => {
  const stack: number[] = [];
  stack.push(0, arr.length - 1);
  while (stack.length > 0) {
    const high = stack.pop() as number;
    const low = stack.pop() as number;
    if (window.isForceStopped) break;
    if (arr[low] > arr[high]) swap(arr, low, high);
    if (delay) await update(arr, 0);
    if (high - low + 1 > 2) {
      const t = Math.floor((high - low + 1) / 3);
      stack.push(low, high - t);
      stack.push(low + t, high);
      stack.push(low, high - t);
    }
  }
  return arr;
};
