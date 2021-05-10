import questionTypes from '../questionTypes';
import {alwaysGreen, alwaysShow} from './utils';

const key = 'coughInPast14Days';

export default {
  key,
  type: questionTypes.boolean,
  show: alwaysShow,
  output: alwaysGreen,
};
