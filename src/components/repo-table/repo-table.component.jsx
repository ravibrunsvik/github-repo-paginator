import React, { useContext } from "react";
import GithubContext from "../../context/github/githubContext";
import RepoItem from "../repo-item/repo-item.component";
import ButtonFooter from "../button-footer/button-footer.component";

import { GithubTableContainer, GithubTable } from "./repo-table.styles";

const RepoTable = () => {
  const githubContext = useContext(GithubContext);
  const { repos, loading, pageStart, pageEnd } = githubContext;
  return (
    <GithubTableContainer>
      <GithubTable>
        <thead>
          <tr>
            <th>Repo</th>
            <th>Author</th>
            <th>
              <i className='fas fa-code-branch' /> Forks
            </th>
            <th>
              <i className='far fa-eye' /> Subscribers
            </th>
            <th>
              <i className='fas fa-exclamation' /> Open issues
            </th>
          </tr>
        </thead>
        <tbody>
          {!loading &&
            repos &&
            repos.map(
              (repo, index) =>
                index <= pageEnd &&
                index >= pageStart && (
                  <RepoItem key={repo.id} {...repo} displayStyle='table' />
                )
            )}
        </tbody>
        <tfoot></tfoot>
      </GithubTable>
      <ButtonFooter />
    </GithubTableContainer>
  );
};

export default RepoTable;
