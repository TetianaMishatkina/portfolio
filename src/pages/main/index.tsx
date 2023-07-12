import React, { FC, useEffect, useState } from "react";
import {
  StyledLeftSide,
  StyledRightSide,
  StyledMain,
  StyledMock,
} from "./styled";
import { UserCard } from "../../components/userCard";
import { ProjectCard } from "../../components/projectCard";
import { useMyProjects } from "../../hooks/useMyProjects";
import { res } from "./mock";
import { StartPage } from "../startPage";
import { HoverLight } from "../../components/hoverLight";
import { StarsBackground } from "../../components/starsBackground";


export const Main: FC<{ handleSeeMore: VoidFunction; isSeeMore: boolean }> = ({
  handleSeeMore,
  isSeeMore,
}) => {
  // const data = useMyProjects();
  const [hasMore, setHasMore] = useState(false);

  const data = res;

  useEffect(() => {
    if (isSeeMore) {
      setTimeout(() => {
        setHasMore(true);
      }, 2800);
    }
  }, [isSeeMore]);

  return (
    <StyledMain>
      {!hasMore ? (
        <StartPage
          handleSeeMore={handleSeeMore}
          isSeeMore={isSeeMore}
          avatar={data.map((user) => user.owner.avatar_url)}
        />
      ) : (
        <StyledMain id="test">
          <StyledLeftSide>
            <UserCard />
          </StyledLeftSide>
          <StyledRightSide>
            <StyledMock>
              {data?.map((project, index) => {
                return (
                  <ProjectCard
                    language={ project.language}
                    key={project.id}
                    name={project.name}
                    description={project.description || ""}
                    repoLink={project.html_url}
                  />
                );
              })}
            </StyledMock>
          </StyledRightSide>
        </StyledMain>
      )}
    </StyledMain>
  );
};
