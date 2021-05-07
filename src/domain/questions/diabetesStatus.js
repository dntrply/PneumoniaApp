import questionTypes from '../questionTypes';
import {objectify, outputWeight} from './utils';
import {t} from '../../messages';

const key = 'diabetesStatus';

const show = ({comorbidities = [], ...form}) =>
  comorbidities.includes('diabetes') && form.recentBloodSugarReport;

const isControlled = ({fbs, pp2bs, rbs, hba1c}) => {
  const fbsMissing = !fbs || fbs === 'dontKnow';
  const pp2bsMissing = !pp2bs || pp2bs === 'dontKnow';
  const rbsMissing = !rbs || rbs === 'dontKnow';
  const hba1cMissing = !hba1c || hba1c === 'dontKnow';
  if (fbsMissing && pp2bsMissing && rbsMissing && hba1cMissing) {
    return false;
  }

  return !(
    fbs === 'moreThan126' ||
    pp2bs === 'moreThan200' ||
    rbs === 'moreThan200' ||
    hba1c === 'moreThan7'
  );
};

const output = form =>
  isControlled(form)
    ? objectify(outputWeight.green)
    : objectify(outputWeight.yellow, 'diabetesStatusYellow');

const value = form => {
  return isControlled(form)
    ? t('diabetesControlled')
    : t('diabetesUncontrolled');
};

export default {
  key,
  type: questionTypes.information,
  show,
  output,
  value,
};
