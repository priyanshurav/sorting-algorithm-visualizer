import update from './update';

async function merge(left: number[], right: number[]): Promise<number[]> {
  const result: number[] = [];
  while (left.length > 0 && right.length > 0) {
    if (right[0] < left[0]) {
      result.push(right[0]);
      right.shift();
    } else {
      result.push(left[0]);
      left.shift();
    }
  }
  while (left.length > 0) {
    result.push(left[0]);
    left.shift();
  }
  while (right.length > 0) {
    result.push(right[0]);
    right.shift();
  }

  return result;
}

export default async function mergeSort(
  arr: number[],
  delay?: boolean
): Promise<number[]> {
  let len = 1;
  while (len < arr.length) {
    let i = 0;
    while (i < arr.length) {
      if (window.isForceStopped) break;

      // The start of the left part
      let l1 = i;
      // The end of the left part
      let r1 = i + len - 1;
      // The start of the right part
      let l2 = i + len;
      // The end of the right part
      let r2 = i + 2 * len - 1;

      if (l2 >= arr.length) break;
      if (r2 >= arr.length) r2 = arr.length - 1;

      const temp = await merge(arr.slice(l1, r1 + 1), arr.slice(l2, r2 + 1));
      for (let j = 0; j < r2 - l1 + 1; j++) {
        arr[i + j] = temp[j];
        if (delay) await update(arr, 15);
      }
      i = i + 2 * len;
    }
    len = 2 * len;
  }
  return arr;
}
