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
        <MapPin size={15} />
        <StyledNameLocation>Krakow, Poland</StyledNameLocation>
      </StyledLocation>

      <StyledInfoContainer>
        <StyledQuestionBlock>
          <StyledQuestion>Who am I?</StyledQuestion>
          <StyledDivider></StyledDivider>
          <StyledInfo>
            Hi! I am Junior Frontend Developer.
            <br /> Here you can see my projects that I created by myself!
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
