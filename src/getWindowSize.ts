import { WindowSize } from './types';

export default (): WindowSize => {
  const width = document.documentElement.clientWidth;
  const height = document.documentElement.clientHeight;
  return { width, height };
};
