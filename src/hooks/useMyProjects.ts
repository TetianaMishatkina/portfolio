import React, { useEffect, useState } from "react";
import { ReposResponse } from "../pages/main/types";

export const useMyProjects = () => {
  const [data, setData] = useState<ReposResponse>([]);

  const myProjects = async () => {
    const response = await fetch(
      "https://api.github.com/users/TetianaMishatkina/repos",
      {
        method: "GET",
        headers: { Authorization: `token ${process.env.REACT_APP_TOKEN}` },
      }
    );
    if (response.status === 200) {
      const projects = await response.json();
      setData(projects);
    }
  };

  useEffect(() => {
    myProjects();
  }, []);

  return data;
};
