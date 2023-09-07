import React from "react";
import {
  StyledPersonalInformation,
  StyledName,
  StyledInfo,
  StyledEmail,
  StyledInfoContainer,
  StyledQuestionBlock,
  StyledDivider,
  StyledQuestion,
  StyledLocation,
  StyledNameLocation,
} from "./styled";
import { MapPin } from "@phosphor-icons/react";

export const PersonalInformation = () => {
  return (
    <StyledPersonalInformation>
      <StyledName>Tetiana Mishatkina</StyledName>
      <StyledLocation>
        <MapPin color="white" size={15} />
        <StyledNameLocation>Krakow, Poland</StyledNameLocation>
      </StyledLocation>

      <StyledInfoContainer>
        <StyledQuestionBlock>
          <StyledQuestion>Who am I?</StyledQuestion>
          <StyledDivider></StyledDivider>
          <StyledInfo>
            Hello! I'm a Junior Frontend Developer committed to building quality projects.
            <br /> Take a look at what I've created!
          </StyledInfo>
        </StyledQuestionBlock>

        <StyledQuestionBlock>
          <StyledQuestion>Contact me:</StyledQuestion>
          <StyledDivider></StyledDivider>
          <StyledEmail>
            <a href="mailTo:tetianamishatkina98@gmail.com">
              tetianamishatkina98@gmail.com
            </a>
          </StyledEmail>
        </StyledQuestionBlock>
      </StyledInfoContainer>
    </StyledPersonalInformation>
  );
};
