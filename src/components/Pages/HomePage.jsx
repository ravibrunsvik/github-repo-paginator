import React, { useContext, useEffect } from "react";
import RepoList from "../Layout/repo-list/repo-list.component";
import RepoTable from "../Layout/repo-table/repo-table.component";
import Spinner from "../Layout/spinner/Spinner.component";
import ListToggle from "../Layout/list-toggle/list-toggle.component";
import GithubContext from "../../context/github/githubContext";

const HomePage = () => {
  const githubContext = useContext(GithubContext);
  const { list, loading, getData } = githubContext;
  useEffect(() => {
    getData();
    // eslint-disable-next-line
  }, []);
  return (
    <div>
      {loading && <Spinner />}
      {!loading && <ListToggle />}
      {!list && !loading && <RepoTable />}
      {list && !loading && <RepoList />}
    </div>
  );
};

export default HomePage;
