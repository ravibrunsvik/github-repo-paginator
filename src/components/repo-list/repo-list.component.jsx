import React, { useContext, useEffect, Fragment } from "react";
import GithubContext from "../../context/github/githubContext";
import Spinner from "../spinner/Spinner.component";
import RepoItem from "../repo-item/repo-item.component";

import { ListContainer } from "./repo-list.styles";
import ButtonFooter from "../button-footer/button-footer.component";

const RepoList = () => {
  const githubContext = useContext(GithubContext);
  const { loading, getData, repos, pageEnd, pageStart } = githubContext;

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      {loading && <Spinner />}
      {!loading && repos && (
        <ListContainer>
          {repos.map(
            (repo, index) =>
              index <= pageEnd &&
              index >= pageStart && <RepoItem key={repo.id} {...repo} />
          )}

          <ButtonFooter />
        </ListContainer>
      )}
    </div>
  );
};

export default RepoList;
