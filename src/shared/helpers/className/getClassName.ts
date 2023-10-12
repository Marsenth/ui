export const getClassName = (mainClassName: string | undefined, optionalClassName: string | undefined) => {
  let className = mainClassName;

  if (optionalClassName) className += ` ${optionalClassName}`;

  return className;
};

export default getClassName;
