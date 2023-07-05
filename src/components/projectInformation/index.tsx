import React, { FC } from "react";
import {
  StyledProjectInformation,
  StyledProjectName,
  StyledProjectInfoContainer,
  StyledQuestionBlock,
  StyledDivider,
  StyledQuestion,
  StyledProjectDescription,
  StyledProjectLink,
  StyledProjectAvatar,
} from "./styled";
import { Avatar } from "../avatar";

interface ProjectProps {
  name: string;
  description: string;
  repoLink: string;
  avatar: string;
}

export const ProjectInformation: FC<ProjectProps> = ({
  avatar,
  name,
  description,
  repoLink,
}) => {
  return (
    <StyledProjectInformation>
      <StyledProjectAvatar>
        <StyledProjectName>{name}</StyledProjectName>
      </StyledProjectAvatar>

      <StyledProjectInfoContainer>
        <StyledQuestionBlock>
          <StyledQuestion>What is this project about?</StyledQuestion>
          <StyledDivider />
          <StyledProjectDescription>{description}</StyledProjectDescription>
        </StyledQuestionBlock>

        <StyledQuestionBlock>
          <StyledQuestion>Link to repossitory:</StyledQuestion>
          <StyledDivider />
          <StyledProjectLink href={repoLink} target="_blank">
            {repoLink}
          </StyledProjectLink>
        </StyledQuestionBlock>
      </StyledProjectInfoContainer>
    </StyledProjectInformation>
  );
};
