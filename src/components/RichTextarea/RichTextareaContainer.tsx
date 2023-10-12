import { LegacyRef, useEffect, useMemo, useRef, useState } from "react";
import { useScreenSize } from "../../shared/hooks/useScreenSize";

export default function RichTextareaContainer({ children }: any) {
  const ref: LegacyRef<HTMLDivElement> = useRef(null);
  const [style, setStyle] = useState({ height: 0 });
  const screenSize = useScreenSize();

  const updateStyle = () => {
    if (ref.current?.firstChild) {
      const child = ref.current.firstChild;
      const grandchildHead = child.firstChild as HTMLDivElement;
      const grandchildBody = child.lastChild as HTMLDivElement;
      const divHeight = grandchildHead.offsetHeight + grandchildBody.offsetHeight;
      if (divHeight && divHeight !== style.height) setStyle({ height: divHeight });
    }
  }

  useEffect(() => {
    updateStyle();
  }, [children, screenSize]);

  return <div className='bg-white' ref={ref} style={style}>
    {children}
  </div>;
}