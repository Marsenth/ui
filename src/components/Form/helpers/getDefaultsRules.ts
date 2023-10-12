import { FormItemRulesProps } from '../interfaces';
import { GetDefaultsRulesParams } from './interfaces';

export const getDefaultsRules = (params: GetDefaultsRulesParams): FormItemRulesProps => {
  const { child, lvl } = params;
  const results = {};
  const isFormItem = child?.type?.name === 'FormItem';
  const sons = Array.isArray(child) ? child : child?.props?.children;

  if (isFormItem) {
    const { name, rules } = child.props;
    return rules?.length ? { [name]: rules } : {};
  } else if (sons) {
    for (const key of Object.keys(sons)) {
      const sonParams = { child: sons[key], lvl: (lvl || 0) + 1 };
      Object.assign(results, getDefaultsRules(sonParams));
    }
  }

  return results;
}