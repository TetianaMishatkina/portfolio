import React, { FC } from "react";
import { StyledProjectCard, StyledAboutSection } from "./styled";
import { Avatar } from "../avatar";
import { ProjectInformation } from "../projectInformation";

interface ProjectProps {
  avatar: string;
  name: string;
  description: string;
  repoLink: string;
}

export const ProjectCard: FC<ProjectProps> = ({
  avatar,
  description,
  repoLink,
  name,
}) => {
  return (
    <StyledProjectCard>
      <StyledAboutSection>
        <ProjectInformation
          avatar={avatar}
          name={name}
          description={description}
          repoLink={repoLink}
        />
      </StyledAboutSection>
    </StyledProjectCard>
  );
};
