import React, { FC } from "react";
import { StyledAvatar } from "./styled";

export const Avatar: FC<{ img: string }> = ({ img }) => {
  return (
    <StyledAvatar>
      <img src={img} />
    </StyledAvatar>
  );
};
