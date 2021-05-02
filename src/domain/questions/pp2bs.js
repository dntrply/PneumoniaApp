import questionTypes from '../questionTypes';
import {outputWeight} from './utils';

const key = 'pp2bs';

const show = ({comorbidities = [], ...form}) =>
  comorbidities.includes('diabetes') && form.recentBloodSugarReport;

const output = form =>
  form[key] === 'lessThan200' ? outputWeight.green : outputWeight.yellow;

export default {
  key,
  type: questionTypes.singleChoice,
  options: ['lessThan200', 'moreThan200', 'dontKnow'],
  show,
  output,
};
