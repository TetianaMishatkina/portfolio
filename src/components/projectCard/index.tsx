import React, { FC } from "react";
import { StyledProjectCard, StyledAboutSection } from "./styled";
import { Avatar } from "../avatar";
import { ProjectInformation } from "../projectInformation";

interface ProjectProps {
  name: string;
  description: string;
  repoLink: string;
  language: string;
}

const BACKGROUND_LANGUAGES = {
  typescript: '/logo/typescript.png',
  javascript: '/logo/java-script.png',
  html: 'https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_640.png'
}

export const ProjectCard: FC<ProjectProps> = ({
  description,
  repoLink,
  name,
  language,

}) => {
  return (
    <StyledProjectCard languageUrl={BACKGROUND_LANGUAGES[language.toLowerCase() as keyof typeof BACKGROUND_LANGUAGES]}>
      <StyledAboutSection>

        <ProjectInformation
          name={name}
          description={description}
          repoLink={repoLink}
        />
      </StyledAboutSection>
    </StyledProjectCard>
  );
};
