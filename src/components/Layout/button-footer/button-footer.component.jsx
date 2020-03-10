import React, { useContext, useEffect } from "react";
import GithubContext from "../../../context/github/githubContext";

import { ButtonContainer, StyledButton } from "./button-footer.styles";

const ButtonFooter = () => {
  const githubContext = useContext(GithubContext);
  const { pageStart, pageEnd, pageUp, pageDown, repos } = githubContext;

  useEffect(() => {
    window.addEventListener("keydown", onKeyDown);

    // cleanup
    return () => window.removeEventListener("keydown", onKeyDown);

    // eslint-disable-next-line
  }, []);

  // Keyboard shortcuts
  const onKeyDown = e => {
    if (e.key === "ArrowRight" && pageEnd !== repos.length - 1) {
      pageUp();
      window.scroll(0, 0);
    }
    if (e.key === "ArrowLeft" && pageStart !== 0) {
      pageDown();
      window.scroll(0, 0);
    }
  };

  // Page up / down click event
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
