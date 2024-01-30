import { BAR_WIDTH, CONTROLS_HEIGHT } from './constants';
import getWindowSize from './getWindowSize';

export default (arr: number[]): void => {
  const bars = document.querySelectorAll<HTMLDivElement>('.bar');
  for (let i = 0; i < bars.length; i++) {
    const height = arr[i] * (getWindowSize().height - (CONTROLS_HEIGHT + 30));
    const bar = bars[i];
    bar.style.height = height + 'px';
    bar.style.left = i * BAR_WIDTH + 'px';
  }
};
