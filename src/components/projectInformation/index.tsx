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
  StyledProjectVisualozation,
  StyledProjectContent
} from "./styled";
import { Avatar } from "../avatar";

interface ProjectProps {
  name: string;
  description: string;
  repoLink: string;
}

const projectVisualMap ={
  "Fire-game" :"/projectsView/fire-game.png",
  "Goal-counter": "/projectsView/goal-counter.png",
 "Task-manager": "/projectsView/task-manager.png"
}


export const ProjectInformation: FC<ProjectProps> = ({
  name,
  description,
  repoLink,
}) => {
  return (
    <StyledProjectInformation>
      <StyledProjectVisualozation>
         <img src={projectVisualMap[name as keyof typeof projectVisualMap]}/> 
      </StyledProjectVisualozation>
      <StyledProjectContent>
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
      </StyledProjectContent>
   
    </StyledProjectInformation>
  );
};
