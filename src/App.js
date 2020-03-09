import React from "react";
import "./App.css";
import GithubState from "./context/github/GithubState";
import HomePage from "./components/Pages/HomePage";

const App = () => {
  return (
    <GithubState>
      <HomePage />
    </GithubState>
  );
};

export default App;
