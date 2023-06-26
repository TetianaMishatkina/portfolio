import React, { FC } from "react";
import {
  StyledUserCard,
  StyledAvatarContainer,
  StyledAboutSection,
} from "./styled";
import { Avatar } from "../avatar";
import { PersonalInformation } from "../personalInformation";

export const UserCard = () => {
  return (
    <StyledUserCard>
      <StyledAvatarContainer>
        <Avatar img={"https://cdn.wallpapersafari.com/13/91/Zp2saG.jpg"} />
      </StyledAvatarContainer>
      <StyledAboutSection>
        <PersonalInformation />
      </StyledAboutSection>
    </StyledUserCard>
  );
};
