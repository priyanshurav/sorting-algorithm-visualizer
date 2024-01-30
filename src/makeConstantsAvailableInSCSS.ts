import { snakeCase } from 'lodash';
import * as constants from './constants';

export default (): void => {
  for (const [key, value] of Object.entries({ ...constants })) {
    document.body.style.setProperty(
      `--${snakeCase(key).replace(/_/, '-')}`,
      value + 'px'
    );
  }
};
