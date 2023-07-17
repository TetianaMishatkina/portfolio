import React, { FC } from "react";
import {
  StyledUserCard,
  StyledAvatarContainer,
  StyledAboutSection,
} from "./styled";
import { Avatar } from "../avatar";
import { PersonalInformation } from "../personalInformation";

interface UserProps {
  avatar: any;
}

export const UserCard: FC<UserProps> = ({ avatar }) => {
  return (
    <StyledUserCard>
      <StyledAvatarContainer>
        <Avatar img={avatar} />
      </StyledAvatarContainer>
      <StyledAboutSection>
        <PersonalInformation />
      </StyledAboutSection>
    </StyledUserCard>
  );
};
