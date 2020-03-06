import React, { useContext, useEffect } from "react";
import GithubContext from "../../context/github/githubContext";
import Spinner from "../spinner/Spinner.component";
import RepoItem from "../repo-item/repo-item.component";

const RepoList = () => {
  const githubContext = useContext(GithubContext);
  const {
    loading,
    getData,
    repos,
    pageStart,
    pageEnd,
    pageUp,
    pageDown,
  } = githubContext;

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      {loading && <Spinner />}
      {!loading &&
        repos &&
        repos.map(
          (repo, index) =>
            index <= pageEnd &&
            index >= pageStart && <RepoItem key={repo.id} {...repo} />
        )}
      {!loading && repos && (
        <div className='button-footer'>
          {pageStart !== 0 && (
            <button onClick={() => pageDown()}>Previous</button>
          )}
          {pageEnd !== repos.length - 1 && (
            <button onClick={() => pageUp()}>Next</button>
          )}
        </div>
      )}
    </div>
  );
};

export default RepoList;
