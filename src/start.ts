import bogoSort from './bogoSort';
import bubbleSort from './bubbleSort';
import insertionSort from './insertionSort';
import mergeSort from './mergeSort';
import { hoareQuickSort, lomutoQuickSort } from './quickSort';
import selectionSort from './selectionSort';
import stoogeSort from './stoogeSort';
import { Algorithms } from './types';

export default async (algorithm: Algorithms, arr: number[]): Promise<void> => {
  switch (algorithm) {
    case Algorithms.BUBBLE_SORT: {
      await bubbleSort(arr, true);
      break;
    }
    case Algorithms.INSERTION_SORT: {
      await insertionSort(arr, true);
      break;
    }
    case Algorithms.MERGE_SORT: {
      await mergeSort(arr, true);
      break;
    }
    case Algorithms.HOARE_QUICK_SORT: {
      await hoareQuickSort(arr, true);
      break;
    }
    case Algorithms.LOMUTO_QUICK_SORT: {
      await lomutoQuickSort(arr, true);
      break;
    }
    case Algorithms.SELECTION_SORT: {
      await selectionSort(arr, true);
      break;
    }
    case Algorithms.STOOGE_SORT: {
      await stoogeSort(arr, true);
      break;
    }
    case Algorithms.BOGO_SORT: {
      await bogoSort(arr, true);
      break;
    }
  }
};
