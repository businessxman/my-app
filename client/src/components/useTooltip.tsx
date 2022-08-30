import React from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";
import useTooltip from "../hooks/useTooltip";

export interface StyledTooltipContainerProps {
  readonly top?: number;
  readonly left?: number;
}

export const StyledTooltipContainer = styled.div<StyledTooltipContainerProps>`
  position: absolute;
  top: ${({ top }) => top || 0}px;
  left: ${({ left }) => left || 0}px;
`;

export default function Tooltip() {
  const portalRef = document.getElementById("portal") as HTMLElement;
  const { isTooltipVisible, top, left, content } = useTooltip();

  return createPortal(
    isTooltipVisible ? (
      <StyledTooltipContainer top={top} left={left}>
        <div 
          className="content tooltip fade show bs-tooltip-top"
          role="tooltip"
          id="tooltip201305"
          data-popper-placement="top"
          style={{"position": 'absolute','inset': 'auto auto 0px 0px;', 'margin': '0px;', 'transform': 'translate3d(236px, -408.219px, 0px);', 'transition': 'opacity .9s linear;' }}>
            <div className="tooltip-arrow" style={{"position": 'absolute', 'left': '0px;', 'transform': 'translate3d(26px, 0px, 0px);'}}></div>
            <div className="tooltip-inner">{content}</div>
        </div>
      </StyledTooltipContainer>
    ) : null,
    portalRef
  );
}