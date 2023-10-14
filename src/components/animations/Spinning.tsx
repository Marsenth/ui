import getClassName from "../../shared/helpers/className/getClassName";

export const Spinning = ({ className, containerClassName, containerSize, size }: any) => {
  const classNameByType = (() => {
    switch (size) {
      case 'loading':
        return 'h-20 w-20 border-8';
      case 'button':
      default:
        return 'h-8 w-8 border-4';
    }
  })();

  const containerClassNameBySize = (() => {
    switch (containerSize) {
      case 'button':
        return 'h-full';
      case 'content':
      default:
        return '';
    }
  })();

  const mainContainerClass = getClassName('flex flex-wrap items-center justify-center', containerClassNameBySize);
  const mainClass = getClassName('rounded-full border-l-0 border-b-0 border-r-0 bg-transparent border-solid border-blue-800 border-r-white animate-spin', classNameByType);

  return (
    <div {...{ className: getClassName(mainContainerClass, containerClassName) }}>
      <div className={`${getClassName(mainClass, className)}`}/>
    </div>
  )
}