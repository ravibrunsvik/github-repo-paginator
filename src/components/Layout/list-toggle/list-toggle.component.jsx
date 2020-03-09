import React, { useContext } from "react";
import GithubContext from "../../../context/github/githubContext";
import { ListToggleButton, ToggleContainer } from "./list-toggle.styles";

const ListToggle = () => {
  const githubContext = useContext(GithubContext);
  const { list, toggleList } = githubContext;

  const onClick = () => {
    toggleList();
  };
  return (
    <ToggleContainer>
      <ListToggleButton dataList={list} onClick={onClick} disabled={list}>
        List
      </ListToggleButton>
      <ListToggleButton dataList={!list} onClick={onClick} disabled={!list}>
        Table
      </ListToggleButton>
    </ToggleContainer>
  );
};

export default ListToggle;
