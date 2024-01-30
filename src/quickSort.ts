import swap from './swap';
import update from './update';

const DELAY = 20;

async function hoarePartition(
  arr: number[],
  low: number,
  high: number,
  delay?: boolean
): Promise<number> {
  const idx = Math.floor((high + low) / 2);
  const pivot = arr[idx];
  let i = low - 1;
  let j = high + 1;
  // eslint-disable-next-line no-constant-condition
  while (true) {
    do i++;
    while (arr[i] < pivot);
    do j--;
    while (arr[j] > pivot);
    if (i >= j) return j;
    swap(arr, i, j);
    if (delay) await update(arr, DELAY);
  }
}

export async function hoareQuickSort(
  arr: number[],
  delay?: boolean
): Promise<number[]> {
  const stack: number[] = [];
  stack.push(0, arr.length - 1);
  while (stack.length > 0) {
    if (window.isForceStopped) break;
    const high = stack.pop() as number;
    const low = stack.pop() as number;
    if (low < high) {
      const pivotLocation = await hoarePartition(arr, low, high, delay);
      stack.push(low, pivotLocation);
      stack.push(pivotLocation + 1, high);
    }
  }

  return arr;
}

async function lomutoPartition(
  arr: number[],
  low: number,
  high: number,
  delay?: boolean
): Promise<number> {
  const pivot = arr[low];
  let leftWall = low;

  for (let i = low + 1; i <= high; i++) {
    if (arr[i] < pivot) {
      swap(arr, i, leftWall);
      if (delay) await update(arr, DELAY);
      leftWall++;
    }
  }
  swap(arr, arr.indexOf(pivot), leftWall);
  if (delay) await update(arr, DELAY);
  return leftWall;
}

export async function lomutoQuickSort(
  arr: number[],
  delay?: boolean
): Promise<number[]> {
  const stack: number[] = [];
  stack.push(0, arr.length - 1);
  while (stack.length > 0) {
    if (window.isForceStopped) break;
    const high = stack.pop() as number;
    const low = stack.pop() as number;
    if (low < high) {
      const pivotLocation = await lomutoPartition(arr, low, high, delay);
      stack.push(low, pivotLocation - 1);
      stack.push(pivotLocation + 1, high);
    }
  }

  return arr;
}
