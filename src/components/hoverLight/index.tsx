import { StyledHoverLight, StyledLight } from "./styled";
import { MouseEvent, useState } from "react";

export const HoverLight = () => {
  const [lightPosition, setLightPosition] = useState({
    x: 0,
    y: 0,
  });
  const handleMouseMove = (e: MouseEvent) => {
    const { clientX, clientY } = e;
    setLightPosition({
      x: clientX,
      y: clientY,
    });
  };

  return (
    <StyledHoverLight onMouseMove={handleMouseMove}>
      <StyledLight
        style={{
          background: `radial-gradient(
              300px at ${lightPosition.x}px ${lightPosition.y}px,
          rgba(29, 78, 216, 0.15),
          transparent 100%
          )`,
        }}
      />
    </StyledHoverLight>
  );
};
