import { FormValuesProps } from '../interfaces';
import { getDefaultValueByComponent } from './getDefaultValueByComponent';
import { GetDefaultsValuesParams } from './interfaces';

export const getDefaultsValues = (params: GetDefaultsValuesParams): FormValuesProps => {
  const { child, initialValues, lvl } = params;
  const isFormItem = child?.type?.name === 'FormItem';
  const sons = Array.isArray(child) ? child : child?.props?.children;
  const results = {};

  if (isFormItem) {
    const { name } = child.props;
    return { [name]: initialValues?.[name] || getDefaultValueByComponent(name) };
  } else if (sons) {
    for (const key of Object.keys(sons)) {
      const sonParams = { child: sons[key], initialValues, lvl: (lvl || 0) + 1 };
      Object.assign(results, getDefaultsValues(sonParams));
    }
  }

  return results;
}