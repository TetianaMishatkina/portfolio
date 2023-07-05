import React, { FC, useState } from "react";
import {
  StyledStartPage,
  StyledUserAvatar,
  StyledShortDescription,
  StyledShortDescriptionBox,
  StyledButton,
  StyledButtonCircle,
  StyledIconArrow,
  StyledButtonText,
} from "./styled";
import { Avatar } from "../../components/avatar";

interface StartPageProps {
  avatar: any;
  handleSeeMore: VoidFunction;
  isSeeMore: boolean;
}

export const StartPage: FC<StartPageProps> = ({
  avatar,
  handleSeeMore,
  isSeeMore,
}) => {
  return (
    <StyledStartPage isAnimated={isSeeMore}>
      <StyledUserAvatar>
        <Avatar img={avatar} />
      </StyledUserAvatar>
      <StyledShortDescriptionBox>
        <StyledShortDescription>
          Welcome! <br /> My name is Tetiana Mishatkina! <br /> I want to show
          you my project`s portfolio that I created with using a different
          technical stack!
        </StyledShortDescription>
      </StyledShortDescriptionBox>
      <StyledButton>
        <StyledButtonCircle className="circle" aria-hidden="true">
          <StyledIconArrow className="icon arrow"></StyledIconArrow>
        </StyledButtonCircle>
        <StyledButtonText className="button-text" onClick={handleSeeMore}>
          See More
        </StyledButtonText>
      </StyledButton>
    </StyledStartPage>
  );
};
