import React, { FC } from "react";
import {
  StyledStartPage,
  StyledUserAvatar,
  StyledShortDescription,
  StyledButtonBox,
} from "./styled";
import { Avatar } from "../../components/avatar";

interface UserProps {
  avatar: any;
}

export const StartPage: FC<UserProps> = ({ avatar }) => {
  return (
    <StyledStartPage>
      <StyledUserAvatar>
        <Avatar img={avatar} />
      </StyledUserAvatar>
      <StyledShortDescription>
        Hi! My name is Tetiana Mishatkina! <br /> I want to show you my humble
        portfolio with projects i created with using a different technical
        stack!
      </StyledShortDescription>
      <StyledButtonBox>
        <button>Lets see!</button>
      </StyledButtonBox>
    </StyledStartPage>
  );
};
