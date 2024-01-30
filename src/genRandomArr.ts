import { random } from 'lodash';
import { BAR_WIDTH } from './constants';
import getWindowSize from './getWindowSize';

export default (): number[] => {
  return Array(Math.floor(getWindowSize().width / BAR_WIDTH))
    .fill(0)
    .map(() => random(0, 1, true));
};
