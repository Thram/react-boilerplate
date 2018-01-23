import { actionType } from '../utils/tools';

const appType = actionType('app');

const SET_LANGUAGE = appType('SET_LANGUAGE');
const setLanguage = lang => ({
  type: SET_LANGUAGE,
  payload: lang,
});

const types = {
  SET_LANGUAGE,
};

export { types };
export default {
  setLanguage,
};
