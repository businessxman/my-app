import { useCallback, useContext } from "react";
import {TooltipContext} from "../context/TooltipContext";

function useTooltip() {
  const {
    show,
    setShow,
    top,
    setTop,
    left,
    setLeft,
    content,
    setContent
  } = useContext(TooltipContext);

  const showTooltip = useCallback(
    (top: number, left: number, content: string) => {
      setTop(top);
      setLeft(left);
      setShow(true);
      setContent(content);
    },
    [setTop, setLeft, setShow, setContent]
  );

  const hideTooltip = () => {
    setShow(false);
  };

  return {
    showTooltip,
    hideTooltip,
    isTooltipVisible: show,
    top,
    left,
    content
  };
}

export default useTooltip;