import React from "react";
import "./App.css";
import GithubState from "./context/github/GithubState";

import RepoList from "./components/repo-list/repo-list.component";

const App = () => {
  return (
    <GithubState>
      <RepoList />
    </GithubState>
  );
};

export default App;
