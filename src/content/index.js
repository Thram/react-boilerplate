import get from 'lodash/get';
import { store } from '../store';
import dictionaries from './dictionaries';

const PARAMS_REG_EXP = '%{(.*?)}';
const paramsRegExp = new RegExp(PARAMS_REG_EXP, 'g');

const content = (path, params) => {
  const { language } = store.getState().app;
  const text = get(dictionaries[language], path, '');
  return params ? text.replace(paramsRegExp, (replaceText, key) => params[key]) : text;
};

export { content };
export default dictionaries;
