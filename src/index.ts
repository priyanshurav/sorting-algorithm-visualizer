import './styles/index.scss';
import { BAR_WIDTH, CONTROLS_HEIGHT } from './constants';
import getWindowSize from './getWindowSize';
import makeConstantsAvailableInSCSS from './makeConstantsAvailableInSCSS';
import setupEventListeners, { arr } from './setupEventListeners';

const barsEl = document.querySelector<HTMLDivElement>(
  '.bars'
) as HTMLDivElement;

async function main() {
  makeConstantsAvailableInSCSS();
  setupEventListeners();
  for (let i = 0; i < arr.length; i++) {
    const height = arr[i] * (getWindowSize().height - (CONTROLS_HEIGHT + 30));
    const el = document.createElement('div');
    el.classList.add('bar');
    el.style.height = height + 'px';
    el.style.left = i * BAR_WIDTH + 'px';
    barsEl.appendChild(el);
  }
}

main();
