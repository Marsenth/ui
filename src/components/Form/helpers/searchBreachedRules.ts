import { FormRuleProps } from '../interfaces';

export const searchBreachedRules = (rule: FormRuleProps[], value: any) => {
  const breachedRule = rule.find((rule: any) => {
    if (rule.required && !value) return true;
    if (rule.validator && !rule.validator(value)) return true;
  })

  return breachedRule;
}
