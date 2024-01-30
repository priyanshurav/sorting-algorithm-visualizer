import bubbleSort from './bubbleSort';
import insertionSort from './insertionSort';
import mergeSort from './mergeSort';
import { hoareQuickSort, lomutoQuickSort } from './quickSort';
import selectionSort from './selectionSort';
import stoogeSort from './stoogeSort';
import { SortingFunction } from './types';

const algorithms: [string, SortingFunction][] = Object.entries({
  bubbleSort,
  insertionSort,
  hoareQuickSort,
  lomutoQuickSort,
  mergeSort,
  selectionSort,
  stoogeSort,
});

test.each(algorithms)(`%s: should sort correctly`, async (_, fn) => {
  expect(await fn([4, 9, 2, 1])).toEqual([1, 2, 4, 9]);
});

test.each(algorithms)(`%s: handle empty array correctly`, async (_, fn) => {
  expect(await fn([])).toEqual([]);
});

test.each(algorithms)(
  '%s: should handle duplicates correctly',
  async (_, fn) => {
    expect(await fn([7, 7, 9, 9, 1, 1, 7, 3])).toEqual([
      1,
      1,
      3,
      7,
      7,
      7,
      9,
      9,
    ]);
  }
);

test.each(algorithms)(
  '%s: should handle single element array correctly',
  async (_, fn) => {
    expect(await fn([7])).toEqual([7]);
  }
);

test.each(algorithms)(
  '%s: should handle negative values correctly',
  async (_, fn) => {
    expect(await fn([4, 9, 2, 1, -1, -200])).toEqual([-200, -1, 1, 2, 4, 9]);
  }
);
