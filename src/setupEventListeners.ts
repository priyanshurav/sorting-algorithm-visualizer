import genRandomArr from './genRandomArr';
import renderBars from './renderBars';
import start from './start';
import { Algorithms } from './types';

export let arr = genRandomArr();

let isRunning = false;

const SPACE = ' ';

const algorithmsEl = document.querySelector<HTMLSelectElement>(
  '.algorithms'
) as HTMLSelectElement;

const startBtn = document.querySelector<HTMLButtonElement>('.start');
const forceStopBtn = document.querySelector<HTMLButtonElement>('.force-stop');
const randomBarsBtn = document.querySelector<HTMLButtonElement>('.random-bars');

const handleStart = async (e: KeyboardEvent | MouseEvent): Promise<void> => {
  if (e instanceof KeyboardEvent && e.key !== SPACE) return;
  const algorithm = parseInt(algorithmsEl.value, 10) as Algorithms;
  window.isForceStopped = false;
  isRunning = true;
  await start(algorithm, arr);
  isRunning = false;
};

export default (): void => {
  randomBarsBtn?.addEventListener('click', () => {
    if (isRunning) return;
    arr = genRandomArr();
    renderBars(arr);
  });

  algorithmsEl.addEventListener('change', () => (window.isForceStopped = true));
  forceStopBtn?.addEventListener('click', () => (window.isForceStopped = true));
  startBtn?.addEventListener('click', handleStart);
  window.addEventListener('keydown', handleStart);
};
