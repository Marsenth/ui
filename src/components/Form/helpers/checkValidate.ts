import { cleanEmptyStrings } from './clearEmptyStrings';
import { searchBreachedRules } from './searchBreachedRules';

export const checkValidate = ({
  clean = true,
  values,
  rules,
  updateValues,
  setIsValid,
  updateInvalids
}: any) => {
  const newValues = cleanEmptyStrings(values);

  const newInvalids = Object.keys(newValues).reduce(
    (accum, key) => {
      const value = newValues[key];
      const rule = rules[key];
      const breachedRule = rule && searchBreachedRules(rule, value);

      return Object.assign(accum, breachedRule ? {
        [key]: breachedRule.message || 'Este campo es querido.' 
      } : null);
    }, {}
  );

  const newIsValid = !Object.keys(newInvalids).length;
  const errors = newIsValid ? null :  newInvalids;

  if (clean) updateValues(newValues);
  setIsValid(newIsValid);
  updateInvalids(newInvalids);

  return errors;
}