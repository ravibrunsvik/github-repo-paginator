import React, { useContext } from "react";
import GithubContext from "../../context/github/githubContext";

import { ButtonContainer, StyledButton } from "./button-footer.styles";

const ButtonFooter = () => {
  const githubContext = useContext(GithubContext);
  const { pageStart, pageEnd, pageUp, pageDown, repos } = githubContext;
  return (
    <ButtonContainer>
      {pageStart !== 0 && (
        <StyledButton onClick={() => pageDown()}>Previous</StyledButton>
      )}
      {pageEnd !== repos.length - 1 && (
        <StyledButton onClick={() => pageUp()}>Next</StyledButton>
      )}
    </ButtonContainer>
  );
};

export default ButtonFooter;
