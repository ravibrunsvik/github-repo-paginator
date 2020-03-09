import React, { useContext } from "react";
import GithubContext from "../../context/github/githubContext";
import RepoItem from "../repo-item/repo-item.component";

import { ListContainer } from "./repo-list.styles";
import ButtonFooter from "../button-footer/button-footer.component";

const RepoList = () => {
  const githubContext = useContext(GithubContext);
  const { repos, pageEnd, pageStart } = githubContext;

  return (
    <div>
      <ListContainer>
        {repos.map(
          (repo, index) =>
            index <= pageEnd &&
            index >= pageStart && (
              <RepoItem key={repo.id} {...repo} displayStyle='list' />
            )
        )}
        <ButtonFooter />
      </ListContainer>
    </div>
  );
};

export default RepoList;
