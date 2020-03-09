import React, { useContext } from "react";
import GithubContext from "../../context/github/githubContext";

import { ButtonContainer, StyledButton } from "./button-footer.styles";

const ButtonFooter = () => {
  const githubContext = useContext(GithubContext);
  const { pageStart, pageEnd, pageUp, pageDown, repos } = githubContext;

  const onClick = e => {
    e.target.innerHTML === "Previous" ? pageDown() : pageUp();

    window.scroll(0, 0);
  };
  return (
    <ButtonContainer>
      {pageStart !== 0 && (
        <StyledButton onClick={onClick}>Previous</StyledButton>
      )}
      {pageEnd !== repos.length - 1 && (
        <StyledButton onClick={onClick}>Next</StyledButton>
      )}
    </ButtonContainer>
  );
};

export default ButtonFooter;
