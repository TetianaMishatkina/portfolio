import React, { useState } from "react";
import { StyledLeftSide, StyledRightSide, StyledMain } from "./styled";
import { UserCard } from "../../components/userCard";
import { ProjectCard } from "../../components/projectCard";
import { useMyProjects } from "../../hooks/useMyProjects";
import { res } from "./mock";
import { StartPage } from "../startPage";

const languageMap = {
  HTML: "https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_640.png",
  TypeScript:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0CQmvGcvFH1DCXQ62Lt56-ZYYU2nnawPJ25NGQ9ad7waQVk5W8K5HB4z6vrfGL3lhU0Y&usqp=CAU",
  JavaScript:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png",
};

export const Main = () => {
  // const data = useMyProjects();
  const data = res;

  return (
    <StyledMain>
      <StartPage avatar={data.map((user) => user.owner.avatar_url)} />;
      {/*<StyledLeftSide>*/}
      {/*  <UserCard />*/}
      {/*</StyledLeftSide>*/}
      {/*<StyledRightSide>*/}
      {/*  {data?.map((project) => {*/}
      {/*    return (*/}
      {/*      <>*/}
      {/*        <ProjectCard*/}
      {/*          avatar={*/}
      {/*            languageMap[project.language as keyof typeof languageMap]*/}
      {/*          }*/}
      {/*          name={project.name}*/}
      {/*          description={project.description || ""}*/}
      {/*          repoLink={project.html_url}*/}
      {/*        />*/}
      {/*      </>*/}
      {/*    );*/}
      {/*  })}*/}
      {/*</StyledRightSide>*/}
    </StyledMain>
  );
};
