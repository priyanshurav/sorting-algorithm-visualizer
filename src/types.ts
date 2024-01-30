export enum Algorithms {
  BUBBLE_SORT,
  INSERTION_SORT,
  HOARE_QUICK_SORT,
  LOMUTO_QUICK_SORT,
  MERGE_SORT,
  SELECTION_SORT,
  STOOGE_SORT,
  BOGO_SORT,
}

export interface WindowSize {
  height: number;
  width: number;
}

export type SortingFunction = (
  arr: number[],
  delay?: boolean
) => Promise<number[]>;
